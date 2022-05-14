
const header = document.querySelector('header');
const prevScrollPos = window.pageYOffset;

if (window.matchMedia("only screen and (max-width: 760px)").matches) {
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (window.pageYOffset > 100) {
      header.style.top = '0px'
    } else {
      header.style.top = '-100px';
    }
    prevScrollPos = currentScrollPos;
  };
} else {
  //mobile device
}

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

//Tabs 

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.tabs__nav-btn').click();

//Accordion

const accordion = document.querySelectorAll('.accordion');


accordion.forEach((item) =>
  item.addEventListener('click', () => {
    let panel = item.nextElementSibling;

    if(panel.style.display === "block"){
      panel.style.display = "none";
      item.classList.toggle('active')
      panel.style.maxHeight = null
    } else {
      panel.style.display = "block";
      item.classList.toggle('active')
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
)
