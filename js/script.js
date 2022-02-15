
// sticky navbar
if ($(window).width() > 300) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('.top_header').addClass("fixed-top ");
          $('.top_header').addClass("sticky");
          // $('#navbar_top').addClass("container");
          // $('.top_header').addClass("container-fluid");
      
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('.top_header').removeClass("fixed-top ");
          $('.top_header').removeClass("sticky ");
           // remove padding top from body
          $('body').css('padding-top', '0');
        }   
    });
  } 

  /* ----------------------------------------------------------------
                [ back-top ]
-----------------------------------------------------------------*/


$(".back_top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

$(window).scroll(function() {
  if ($(this).scrollTop()) {
      $('.back_top').fadeIn();
  } else {
      $('.back_top').fadeOut();
  }
});


    $('.scroll_bottom').click (function() {
      $('html, body').animate({scrollTop: $('section.about_us').offset().top }, 'slow');
      return false;
    });


// start carusel
$('.main_slider').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    nav:true,
    mouseDrag:false,
    autoplay:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// fade drop down 
// $('.dropdown-toggle').click(function() {
//   $(this).next('.dropdown-menu').fadeToggle(400);
// });

	/*====================================
		09. Brand Slider JS
		======================================*/
    $('.brands_slider').owlCarousel({
      loop:true,
      margin:10,
      dots:false,
      nav:true,
      mouseDrag:true,
      autoplay:true,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive:{
          0:{
              items:1,
              nav:false,
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  });
		
// cube portfolio 
$('#portfolio-item').cubeportfolio({
  filters: '#portfolio-menu',
  loadMore: '#loadMore',
  loadMoreAction: 'click',
  defaultFilter: '*',
  layoutMode: 'grid',
  // animationType: 'quicksand',
  gridAdjustment: 'responsive',
  gapHorizontal: 15,
  showNavigation:true,
  gapVertical: 15,
  animationType:'quicksand',
  mediaQueries: [{
      width: 1100,
      cols: 4,
  },{
      width: 768,
      cols: 3,
  }, {
      width: 480,
      cols: 2,
  },{
      width: 0,
      cols: 1,
  }],
  caption: 'overlayBottomPush',
  displayType: 'fadeIn',
  displayTypeSpeed: 5,

  // lightbox
  lightboxDelegate: '.cbp-lightbox',
  lightboxGallery: true,
  lightboxTitleSrc: 'data-title',
  lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
});

$('#portfolio-item-2').cubeportfolio({
  filters: '#portfolio-menu',
  loadMore: '#loadMore',
  loadMoreAction: 'click',
  defaultFilter: '*',
layoutMode: 'grid',
  animationType: 'quicksand',
gridAdjustment: 'responsive',
  gapHorizontal: 15,
  gapVertical: 15,
  mediaQueries: [{
      width: 1100,
      cols: 3,
  },{
      width: 768,
      cols: 3,
  }, {
      width: 480,
      cols: 2,
  },{
      width: 0,
      cols: 1,
  }],
  caption: 'overlayBottomPush',
  displayType: 'sequentially',
  displayTypeSpeed: 80,

  // lightbox
  lightboxDelegate: '.cbp-lightbox',
  lightboxGallery: true,
  lightboxTitleSrc: 'data-title',
  lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
});
$('#portfolio-item-3').cubeportfolio({
  filters: '#portfolio-menu',
  loadMore: '#loadMore',
  loadMoreAction: 'click',
  defaultFilter: '*',
layoutMode: 'grid',
  animationType: 'quicksand',
gridAdjustment: 'responsive',
  gapHorizontal: 15,
  gapVertical: 15,
  mediaQueries: [{
      width: 1100,
      cols: 2,
  },{
      width: 768,
      cols: 3,
  }, {
      width: 480,
      cols: 2,
  },{
      width: 0,
      cols: 1,
  }],
  caption: 'overlayBottomPush',
  displayType: 'sequentially',
  displayTypeSpeed: 80,

  // lightbox
  lightboxDelegate: '.cbp-lightbox',
  lightboxGallery: true,
  lightboxTitleSrc: 'data-title',
  lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
});

