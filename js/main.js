
(function ($) {
  /*[ Load page ]
  ===========================================================*/
  $(".animsition").animsition({
    inClass: 'zoom-in-sm',
    outClass: 'fade-out',
    inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<div class="loader05"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) { window.location.href = url; }
  });
  // back-to-top

  var x = $(window).height() / 2;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > x) {
      $(".back-to-top").css("display", "flex")
    }
    else $(".back-to-top").css("display", "none");

  });
  $(".back-to-top").on("click", function () {
    $("html").animate({ scrollTop: 0 }, 500)
  });




  // isotope
  var $topeContainer = $('.grid-isotope');
  var $filter = $('.menu-isotope');
  $filter.each(function () {
    $filter.on('click', '.nav-left a', function () {
      var filterValue = $(this).attr('data-filter');
      $topeContainer.isotope({ filter: filterValue });
    });
  });

  $(window).on('load', function () {
    var $grid = $topeContainer.each(function () {
      $(this).isotope({
        itemSelector: '.item-isotope',
        layoutMode: 'fitRows',
        percentPosition: true,
        animationEngine: 'best-available',
        masonry: {
          columnWidth: '.item-isotope'
        }
      });
    });
  });

  $(".grid-isotope").isotope(function () {

  })
  // active
  var isotopeButton = $('.menu-isotope>.nav-left>a');
  $(isotopeButton).each(function () {
    $(this).on('click', function () {
      for (var i = 0; i < isotopeButton.length; i++) {
        $(isotopeButton[i]).removeClass('active-2');
      }
      $(this).addClass('active-2');
    });
  });
  // carousel
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      576: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      },
    }
  })
  owl.owlCarousel();
  $('#next-carousel').click(function () {
    owl.trigger('next.owl.carousel');
  })
  $('#back-carousel').click(function () {
    owl.trigger('prev.owl.carousel');
  })

  // 
  var owlpartner = $('.partner');
  owlpartner.owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,

      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
    }
  })
  owlpartner.owlCarousel();
  $('#next-carousel-2').click(function () {
    owlpartner.trigger('next.owl.carousel');
  })
  $('#back-carousel-2').click(function () {
    owlpartner.trigger('prev.owl.carousel');
  })

  // fiter toggle==================================================
  var EleChangeFilter = $("#drop-filter")
  var EleChangeSearch = $("#drop-search")
  var iconFilter = $("#filter>i")
  var iconSearch = $("#search>i")
  function iconChange() {
    if (EleChangeFilter.css("display") != "none") {
      iconFilter.removeClass("fa-filter");
      iconFilter.addClass("fa-close");
    } else {
      iconFilter.removeClass("fa-close");
      iconFilter.addClass("fa-filter");
    }
    if (EleChangeSearch.css("display") != "none") {
      iconSearch.removeClass("fa-search");
      iconSearch.addClass("fa-close");
    } else {
      iconSearch.removeClass("fa-close");
      iconSearch.addClass("fa-search");
    }
  }

  EleChangeFilter.css({ "display": "none" });
  EleChangeSearch.css({ "display": "none" });

  $("#filter").click( function () {
    function run(callback) {
      EleChangeFilter.slideToggle("slow",callback);
      if (EleChangeSearch.css("display") != "none") {
        EleChangeSearch.slideToggle("slow",callback )
      }
    }
    run(iconChange)

  })
  
  $("#search").click(function () {
    function run(callback) {
    EleChangeSearch.slideToggle("slow",callback);
    if (EleChangeFilter.css("display") != "none") {
      EleChangeFilter.slideToggle("slow",callback)
    }}
    run(iconChange)
  })

})(jQuery);


