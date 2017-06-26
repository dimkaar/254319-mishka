let navMain = document.querySelector('.main-header__nav');
let navToggle = document.querySelector('.main-header__toggle');
let indexBuyBtn = document.querySelector('.product-article__btn');
let catalogBuyBtn = document.querySelector('.about-manufacture__btn');
let modalWindow = document.querySelector('.modal-block');
let bodyOverlay = document.querySelector('.body-overlay');

navMain.classList.remove('main-header__nav--nojs');

if (navToggle) {
  navToggle.addEventListener('click', function(){
    if(navMain.classList.contains('main-header__nav--closed')) {
      navMain.classList.remove('main-header__nav--closed');
      navMain.classList.add('main-header__nav--opened');
    } else {
      navMain.classList.remove('main-header__nav--opened');
      navMain.classList.add('main-header__nav--closed');
    }
  });
}

if (indexBuyBtn) {
  indexBuyBtn.addEventListener('click', function() {
    event.preventDefault();
    if(modalWindow.style.display === 'none' || modalWindow.style.display === '') {
      modalWindow.style.display = 'flex';
      bodyOverlay.style.display = 'block';
    } else {
      return 0;
    }
  });
}

if (catalogBuyBtn) {
  catalogBuyBtn.addEventListener('click', function() {
    event.preventDefault();
    if(modalWindow.style.display === 'none' || modalWindow.style.display === '') {
      modalWindow.style.display = 'flex';
      bodyOverlay.style.display = 'block';
    } else {
      return 0;
    }
  });
}

if (bodyOverlay) {
  bodyOverlay.addEventListener('click', function() {
    if (bodyOverlay.style.display === 'block') {
      modalWindow.style.display = 'none';
      bodyOverlay.style.display = 'none';
    }
  });
}

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27) {
    if (modalWindow.style.display === 'flex') {
      modalWindow.style.display = 'none';
      bodyOverlay.style.display = 'none';
    }
  }
});
