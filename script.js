$(document).ready(() => {
  const $menuBars = $('.menu > i');
  const $menuCross = $('.menu-icon-cross > i');
  $('.menu-expanded').addClass('hide');

  $menuBars.on('click', () => {
    $('.menu-expanded').removeClass('menu-animated-hide');
    $('.menu-expanded').removeClass('hide');
    $('.menu-expanded').addClass('menu-animated-show');
    // $('.menu-expanded').slideToggle();
  });

  $menuCross.on('click', () => {
    // $('.menu-expanded').hide();
    $('.menu-expanded').removeClass('menu-animated-show');
    $('.menu-expanded').addClass('menu-animated-hide');

    $('.menu-expanded').addClass('hide');
    // $('.menu-expanded').slideToggle();
  });

  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 75) {
      $('#navBar').css("opacity", 0.3);
    }
    else {
      $('#navBar').css("opacity", 1);
    }
  });

  $('#navBar').on("mouseover", function () {
    $(this).css("opacity", 1);
  });

  $('#navBar').on("mouseleave", function () {
    if ($(window).scrollTop() > 75) { // this here
      $(this).css("opacity", 0.3);
    }
  });


});
