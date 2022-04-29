"use strict"
// // появление меню для устройст пк
// const header = document.querySelector('header');
// const prevScrollPos = window.pageYOffset;

// if(window.matchMedia("only screen and (min-width: 760px)").matches) {
//   window.onscroll = function() {
//     let currentScrollPos = window.pageYOffset;
//     if (window.pageYOffset > 100) {
//           header.style.top = '0'
//       } else {
//           header.style.top = '-100%';
//       }
//     prevScrollPos = currentScrollPos;
//   };
//   } else {
//   //mobile device
//   }

// Открытие бургер меню
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

//блокировка прокрутки
function onMenuLinkClick() {
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
}