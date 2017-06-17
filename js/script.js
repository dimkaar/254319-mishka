var navMain = document.querySelector('.main-header__nav');
var navToggle = document.querySelector('.main-header__toggle');

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
