var navMain = document.querySelector('.main-header__nav');
var navToggle = document.querySelector('.main-header__toggle');
var buyBtn = document.querySelector('.product-article__btn');
var modalWindow = document.querySelector('.modal-block');
var bodyOverlay = document.querySelector('.body-overlay');

navMain.classList.remove('main-header__nav--nojs');

navToggle.addEventListener('click', function(){
  if(navMain.classList.contains('main-header__nav--closed')) {
    navMain.classList.remove('main-header__nav--closed');
    navMain.classList.add('main-header__nav--opened');
  } else {
    navMain.classList.remove('main-header__nav--opened');
    navMain.classList.add('main-header__nav--closed');
  }
});


buyBtn.addEventListener('click', function() {
  event.preventDefault();
  if(modalWindow.style.display = 'none') {
    modalWindow.style.display = 'flex';
    bodyOverlay.style.display = 'block';
  } else  {
    return 0;
  }
});


window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modalWindow.style.display = 'flex') {
      modalWindow.style.display = 'none';
      bodyOverlay.style.display = 'none';
    }
  }
});
