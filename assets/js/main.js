/* dropdown hover */
(function ($) {
  var defaults = {
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
    navbar_expand: "lg",
  };
  $.fn.bootnavbar = function () {
    var screen_width = $(document).width();
    if (screen_width >= defaults.lg) {
      $(this)
        .find(".dropdown")
        .hover(
          function () {
            $(this).addClass("show");
            $(this)
              .find(".dropdown-menu")
              .first()
              .addClass("show")
              .addClass("animated fadeIn")
              .one(
                "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd",
                function () {
                  $(this).removeClass("animated fadeIn");
                }
              );
          },
          function () {
            $(this).removeClass("show");
            $(this).find(".dropdown-menu").first().removeClass("show");
          }
        );
    }
    $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
      if (!$(this).next().hasClass("show")) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function (e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  };
})(jQuery);
$(function () {
  $("#main_navbar").bootnavbar();
});
/* menu */
$(function () {
  function close() {
    $("body").removeClass("has-active-menu");
    setTimeout(function () {
      $(".nav-slider").removeClass("toggling");
    }, 500);
  }
  function open() {
    $("body").addClass("has-active-menu");
    $(".nav-slider").addClass("toggling");
  }
  $(".nav-mask").click(close);
  $(".navbar-toggler").click(open);
});

$(function () {
  $(".sliderBlock").addClass("sliderBlockHeight");
});
