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
  //Adding smooth scrolling to section links

  $('a').on('click', (event) => {
    console.log(this.hash);
    event.preventDefault();
    let hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset.top }, 800, () => {
      window.location.hash = hash;
    });
  });
});
