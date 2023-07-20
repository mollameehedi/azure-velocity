$(document).ready(function(){
  //popular hotel slider
  $('.popular-hotel').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
	if ($(".slick-prev").hasClass("slick-disabled")) {
    $(".left_arrow").addClass("slick-disabled");
  } else {
    $(".left_arrow").removeClass("slick-disabled");
  }
  if ($(".slick-next").hasClass("slick-disabled")) {
    $(".right_arrow").addClass("slick-disabled");
  } else {
    $(".right_arrow").removeClass("slick-disabled");
  }

  //Promotion slider
  $('.promotion-box').slick({
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    arrows: true,
    nextArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
    prevArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
	if ($(".slick-prev").hasClass("slick-disabled")) {
    $(".left_arrow").addClass("slick-disabled");
  } else {
    $(".left_arrow").removeClass("slick-disabled");
  }
  if ($(".slick-next").hasClass("slick-disabled")) {
    $(".right_arrow").addClass("slick-disabled");
  } else {
    $(".right_arrow").removeClass("slick-disabled");
  }

  // special offer slider
  $(function() {
    $('.special-offer').slick({
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      draggable: false,
      arrows: true,
      nextArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
      prevArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".left_arrow").addClass("slick-disabled");
    } else {
      $(".left_arrow").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".right_arrow").addClass("slick-disabled");
    } else {
      $(".right_arrow").removeClass("slick-disabled");
    }

    
    $(".filter li").on('click', function(){
      var filter = $(this).data('filter');
      $(".special-offer").slick('slickUnfilter');
      
      if(filter == 'flight'){
        $(".special-offer").slick('slickFilter','.flight');
      }
      else if(filter == 'all'){
        
        $(".special-offer").slick('slickUnfilter');
      }
      
    })
    
  });
  // Hot Deals slider
  $(function() {
    $('.hot-deal').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      draggable: false,
      arrows: true,
      centerMode: true,
      // variableWidth: true,
      nextArrow: '<i class="fas fa-chevron-left left_arrow"></i>',
      prevArrow: '<i class="fas fa-chevron-right right_arrow"></i>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    if ($(".slick-prev").hasClass("slick-disabled")) {
      $(".left_arrow").addClass("slick-disabled");
    } else {
      $(".left_arrow").removeClass("slick-disabled");
    }
    if ($(".slick-next").hasClass("slick-disabled")) {
      $(".right_arrow").addClass("slick-disabled");
    } else {
      $(".right_arrow").removeClass("slick-disabled");
    }

    
    $(".filter li").on('click', function(){
      var filter = $(this).data('filter');
      $(".hot-deal").slick('slickUnfilter');
      
      if(filter == 'flight'){
        $(".hot-deal").slick('slickFilter','.flight');
      }
      else if(filter == 'hotel'){
        $(".hot-deal").slick('slickFilter','.hotel');
      }
      else if(filter == 'tour'){
        $(".hot-deal").slick('slickFilter','.tour');
      }
      else if(filter == 'others'){
        $(".hot-deal").slick('slickFilter','.others');
      }
      else if(filter == 'all'){
        $(".hot-deal").slick('slickUnfilter');
      }
      
    })
    
  });
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

})

//campaign video
// let campaignVideoBox = document.querySelector('.campaign-video-box');
// campaignVideoBox.onclick = function(){
//   campaignVideoBox.classList.add('active')
// }
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
});

