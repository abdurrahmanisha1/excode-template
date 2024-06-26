$(function(){

  	/*==== Mobile Menu  ====*/
    $('.mobile_menu .inner_mobile_nav_itmes').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: ".mobile_menu",
      onePage: true,
    });
    
    /*=============== sticky menu ================= */
    var header = $('.main_menu_area');
    $(window).on('scroll',function(){
        if($(window).scrollTop()>50){
            $('.main_menu_area').addClass('sticky');
        }
        else{
            header.removeClass('sticky');
        }
    });

    /*============= main nav icons popup  ===========*/
    $('.main_nav_icons i').click(function(){
      $('.nav_icon_popup').addClass('icon_popup');
    });
    $('.inner_nav_icon_popup i').click(function(){
      $('.nav_icon_popup').removeClass('icon_popup');
    });

    $('.main_nav_icon_right i').click(function(){
      $('.main_nav_icon_right_popup').addClass('site_popup');
    });

    $('.m_nav_rpi_close i').click(function(){
      $('.main_nav_icon_right_popup').removeClass('site_popup');
    });

    /*========== slider active js =============*/
    $('.slider_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
              infinite: false,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
            }
          }
        ]
      });

       /*============= service active js =============*/
     $('.service_active').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            infinite: true,
            arrows: false,
          }
        }
      ]
    });



     /*============= img active js =============*/
     $('.img_active').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1500,
      arrows: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            infinite: true,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            dots: false,
            infinite: true,
            arrows: false,
          }
        }
      ]
    });

      /*============== counter js ============== */
      $('.counter').counterUp({
        delay: 20,
        time: 3000
    });

      /*============= testimonial active js ===========*/
      $('.test_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          }
        ]
      })


       /*============= h2 testimonial active js ===========*/
       $('.h2_test_active').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
              infinite: true,
            }
          }
        ]
      })

      /*================ brand active js =============*/
      $('.brand_active').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              infinite: true,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: false,
              arrows: false,
            }
          }
        ]
      })

       /*================ blog active js =============*/
       $('.blog_active').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              infinite: true,
              arrows: false,
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
            }
          }
        ]
      })

      /* ========== veno box js ========= */
      new VenoBox({
        selector: '.my-image-links',
        spinner: 'rotating-plane'
      });
      new VenoBox({
        selector: '.my-video-links',
      });

      /* faq active js */
      $('.inner_ac_items a').click(function(){
        $('.inner_ac_items a').removeClass('active');
        $(this).addClass('active');
      });

      /*=============== barfiller js ==============*/
      $('#bar1').barfiller({
        barColor: '#000',
      });
      $('#bar2').barfiller({
        barColor: '#000',
      });
      $('#bar3').barfiller({
        barColor: '#000',
      });
      
      /* ====== page scroll js  =========*/
      $(window).scroll(function(){
      if($(this).scrollTop()>200){
      $('#scroll').fadeIn();
      }
      else{
      $('#scroll').fadeOut();
      }
      });

      /*========= direction hover ===========*/
      $(".snake").snakeify({
        speed: 400
      });
 
    /*========= isotope active ==========*/
    /* portfolio active */	
    function twrportfolio(){
      var portfolio = $(".grid");
      if( portfolio.length ){
          portfolio.imagesLoaded( function() {
              portfolio.isotope({
                  itemSelector: ".pitem",
                  layoutMode: 'masonry',
                  filter:"*",
                  animationOptions :{
                      duration:1000
                  },
                  hiddenStyle: {
                      opacity: 0,
                      transform: 'scale(.4)rotate(60deg)',
                  },
                  visibleStyle: {
                      opacity: 1,
                      transform: 'scale(1)rotate(0deg)',
                  },
                  stagger: 0,
                  transitionDuration: '0.9s',
                  masonry: {}
              });
              $(".portfolio_nav ul li").on('click',function(){
                  $(".portfolio_nav ul li").removeClass("current_menu_item");
                  $(this).addClass("current_menu_item");

                  var selector = $(this).attr("data-filter");
                  portfolio.isotope({
                      filter: selector,
                      animationOptions: {
                          animationDuration: 750,
                          easing: 'linear',
                          queue: false
                      }
                  });
                  return false;
              });

          });
      }
    }
    twrportfolio();

  });