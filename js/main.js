(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });
    
    
    // Home page slider
    $('.main-slider').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true
    });
    
    
    // Product Slider 4 Column
    $('.product-slider-4').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Product Slider 3 Column
    $('.product-slider-3').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    
    
    // Single Product Slider
    $('.product-slider-single').slick({
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    
    // Brand Slider
    $('.brand-slider').slick({
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        arrows: false,
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    // Quantity
    $('.qty button').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    // Shipping address show hide
    $('.checkout #shipto').change(function () {
        if($(this).is(':checked')) {
            $('.checkout .shipping-address').slideDown();
        } else {
            $('.checkout .shipping-address').slideUp();
        }
    });
    
    
    // Payment methods show hide
    $('.checkout .payment-method .custom-control-input').change(function () {
        if ($(this).prop('checked')) {
            var checkbox_id = $(this).attr('id');
            $('.checkout .payment-method .payment-content').slideUp();
            $('#' + checkbox_id + '-show').slideDown();
        }
    });
})(jQuery);





const multipleItemCarousel = document.querySelector("#testimonialCarousel");

if (window.matchMedia("(min-width:576px)").matches) {
  const carousel = new bootstrap.Carousel(multipleItemCarousel, {
    interval: false
  });

  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();

  var scrollPosition = 0;

  $(".carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 3) {
      console.log("next");
      scrollPosition = scrollPosition + cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 300);
    }
  });
  $(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition = scrollPosition - cardWidth;
      $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 300);
    }
  });
} else {
  $(multipleItemCarousel).addClass("slide");
}









const sliderWrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slider-slide');
const prevBtn = document.querySelector('.slider-control.prev');
const nextBtn = document.querySelector('.slider-control.next');

let currentSlide = 0;
const totalSlides = slides.length;

// Function to show slide based on index
function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

// Event listeners for navigation
prevBtn.addEventListener('click', () => showSlide(currentSlide - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlide + 1));

// Optional: Auto-slide functionality
setInterval(() => showSlide(currentSlide + 1), 5000);





document.addEventListener('DOMContentLoaded', function () {
    const productsPerPage = 9; // Set the number of products per page
    const products = document.querySelectorAll('.product-item');
    const totalPages = Math.ceil(products.length / productsPerPage);

    // Function to display a specific page
    function showPage(pageNumber) {
        products.forEach((product, index) => {
            product.style.display = 'none';
        });

        // Calculate start and end indices for the current page
        const startIndex = (pageNumber - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        for (let i = startIndex; i < endIndex && i < products.length; i++) {
            products[i].style.display = 'block';
        }

        // Update active page button and enable/disable previous/next buttons
        document.querySelectorAll('.pagination .page-item').forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector(`.pagination .page-item[data-page="${pageNumber}"]`).classList.add('active');
        document.querySelector('.pagination .previous').classList.toggle('disabled', pageNumber === 1);
        document.querySelector('.pagination .next').classList.toggle('disabled', pageNumber === totalPages);
    }

    // Attach event listeners to pagination items
    document.querySelectorAll('.pagination .page-item').forEach((item) => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            let currentPage = parseInt(document.querySelector('.pagination .page-item.active').dataset.page);
            if (this.dataset.page === 'prev' && currentPage > 1) {
                showPage(currentPage - 1);
            } else if (this.dataset.page === 'next' && currentPage < totalPages) {
                showPage(currentPage + 1);
            } else if (!isNaN(this.dataset.page)) {
                showPage(parseInt(this.dataset.page));
            }
        });
    });

    // Show the first page initially
    showPage(1);
});










