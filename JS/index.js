$(document).ready(
  function () {
    $('.main-container').hide().fadeIn(1800);

    $('.header-content').hide().fadeIn(2800);

    $('.item1').animate(
      {left: '0'}, 3000
    )

    $('.item2').hide().fadeIn(2000);

    $('.item3').animate(
      {right: '0'}, 3000
    )

    $('.item4').animate(
      {left: '0'}, 3000
    )

    $('.item5').hide().delay(3000).fadeIn(6000);

    $('.item6').animate(
      {right: '0'}, 3000
    )

    $('.footer-message').hide().delay(3000).slideDown(2000);

    $('footer').animate(
      {left: '0'}, 3000
    )
  }
)