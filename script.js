$(document).ready(function(){
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2,
	spaceBetween: 20,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1400: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
       
        1660: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },
  });
  

  var swiper = new Swiper(".mySwiper_2", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
          nextEl: ".swiper-button-next_2",
          prevEl: ".swiper-button-prev_2",
        }
    });

// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function () {
    $('#tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    let activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
});
	
	$('ul.tabs_2 li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs_2 li').removeClass('current');
		$('.tab-content_2').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

  $(window).on('scroll', function() {
    const scrollTop = $(window).scrollTop();
    const docHeight = $(document).height();
    const windowHeight = $(window).height();
    const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;

    if (scrollPercent >= 10) {
      $('.home_panel_nav').addClass('middle_nav_fixed');
      $('.home_strategies ul li:first-child a').addClass('current');

    } else {
      $('.home_panel_nav').removeClass('middle_nav_fixed');
    }
  });


  let btn = $('.button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  

  $(".mob_menu_btn").click(function() {
    $(".main_nav").addClass('main_nav_mob_active');
    $(".black_overlay").fadeIn();
    $(".m_ul a").css({  opacity: 0, top: '-40px' }).animate({ opacity: 1, top: '0' }, 300);
    
  });
  
  $(".menu_close_btn").click(function() {
    $(".main_nav").removeClass('main_nav_mob_active' );
    $(".black_overlay").fadeOut();
  //  show black overlay 
  });
  $(".black_overlay").click(function () {
  $(".main_nav").removeClass('main_nav_mob_active');
  $(".black_overlay").fadeOut();
  });



}
)









