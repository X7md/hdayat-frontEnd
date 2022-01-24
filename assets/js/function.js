(function ($) {
  "use-strict";

  
	/*------------------------------------
		menu mobile
	--------------------------------------*/
  $(".header-mobile__toolbar").on("click", function () {
    $(".menu--mobile").addClass("menu-mobile-active");
    $(".mobile-menu-overlay").addClass("mobile-menu-overlay-active");
  });

  $(".mobile-menu-overlay").on("click", function () {
    $(".menu--mobile").removeClass("menu-mobile-active");
    $(".mobile-menu-overlay").removeClass("mobile-menu-overlay-active");
  });

  $(".main-header .btn-close-header-mobile").on("click", function () {
    $(".menu--mobile").removeClass("menu-mobile-active");
    $(".mobile-menu-overlay").removeClass("mobile-menu-overlay-active");
  });

  
	/*------------------------------------
		loader page
	--------------------------------------*/
  $(window).on("load", function () {
    $(".loader-page").fadeOut(500);
    var wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: false,
      live: true
    });
    new WOW().init();
  });


  /*------------------------------------
		owlCarousel
	--------------------------------------*/
  
  var owlComent = $(".owl-coment");
  owlComent.owlCarousel({
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    rtl: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    navText: ["<span><i class='dslc-icon-ext-uniE83C'></i></span>", "<span><i class='dslc-icon-ext-arrow-left8'></i></span>"],
  });  



  // ----- COUNTER ----- //
if ($("#counter").length > 0) {
  var a = 0;
  $(window).scroll(function() {
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
          $('.counter-value').each(function() {
              var $this = $(this),
                  countTo = $this.attr('data-count');
              $({
                  countNum: $this.text()
              }).animate({
                      countNum: countTo
                  },
  
                  {
                      duration: 2500,
                      easing: 'swing',
                      step: function() {
                          $this.text(Math.floor(this.countNum));
                      },
                      complete: function() {
                          $this.text(this.countNum);
                          //alert('finished');
                      }
  
                  });
          });
          a = 1;
      }
  });
}




  	// slider-home Carousel
    if ($('.slider-home').length) {
      $('.slider-home').owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        smartSpeed: 1000,
        rtl:true,
        autoplay: 5000,
        navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
        items:1,
      });    		
    }



  /*------------------------------------
		PerfectScrollbar
	--------------------------------------*/
  $('.scroll').each(function(){ const ps = new PerfectScrollbar($(this)[0]); });
  




  /*------------------------------------
		lightcase
	--------------------------------------*/
  $('[data-rel^=lightcase]').lightcase();



  /*------------------------------------
		steps
	--------------------------------------*/

  var form = $("#form-ask");

  form.validate({
    highlight: function (element) {
      $(element).closest(".form-group").addClass("error");
    },
    unhighlight: function (element) {
      $(element).closest(".form-group").removeClass("error");
    },
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
      age: {
        required: true,
      },
      gendar: {
        required: true,
      },
    },
    messages: {
      age: {
        required: "This field is required.",
      },
    },
});
 

  form.steps({
    headerTag: "h2",
    bodyTag: "section",
    transitionEffect: "fade",
    ////////////////// enableAllSteps: true,
    autoFocus: true,
    transitionEffectSpeed: 500,
    titleTemplate: '<div class="title">#title#</div>',
    labels: {
      next: "التالي",
      current: "Next",
      finish: "ارسال",
      previous: "السابق",
    },
    onStepChanging: function (event, previousIndex, newIndex , currentIndex) {

      form.validate().settings.ignore = ":disabled,:hidden";
      return form.valid();
    },
    onFinishing: function (event, currentIndex) {
      form.validate().settings.ignore = ":disabled";
      return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
      $('#form-ask').submit()
    }
  });


  /*------------------------------------
		selectpicker
	--------------------------------------*/
  $(".selectpicker").selectpicker();




  /*------------------------------------
		rating
	--------------------------------------*/
  $('.kv-rtl-theme-default-star').rating({
    hoverOnClear: false,
    step:1,
    containerClass: 'is-star'
  });



   /*------------------------------------
		Fixed Head And Scroll page
	--------------------------------------*/
  $(window).scroll(function () {
    $(".section").each(function () {
      if ($(window).scrollTop() > $(this).offset().top - 80) {
        var blockID = $(this).attr("id");
        $(".main-header .menu_item a").removeClass("active");
        $('.main-header .menu_item a[data-scroll="' + blockID + '"]').addClass("active");
      }
    });
  });

  $(".main-header a[data-scroll] , .link-footer.menu a[data-scroll]").click(function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("scroll")).offset().top - 40,
      },
      1400
    );

    if ($(window).width() < 992) {
      $(".menu--mobile").removeClass("menu-mobile-active");
      $(".mobile-menu-overlay").removeClass("mobile-menu-overlay-active");
    }
  });

  $(window).scroll(function () {
    fixedHeader();
  });
  $(window).on("load", function () {
    fixedHeader();
  });
    

  $(".top-page").click(function() {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".top-page").fadeIn();
    } else {
        $(".top-page").fadeOut();
    }
  })


})(jQuery);

function fixedHeader() {
  if ($(window).scrollTop() > 50) {
      $(".main-header").addClass("fixed-header");
  } else {
      $(".main-header").removeClass("fixed-header");
  }
  }



if ($(".myDropzone").length > 0) {
  var myDropzone = new Dropzone(".myDropzone", { 
    url: "/file/post",  dictDefaultMessage: `
      <span class='icon'><img src="assets/images/svg/arrow-down-2.svg"></span><span class='text'>ارفع صورة التوقيع</span>`
      ,acceptedFiles: 'image/*'}
    );
}


