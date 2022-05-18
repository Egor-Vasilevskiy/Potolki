let header = document.querySelector('header');
var prevScrollpos = window.pageYOffset;

if (window.matchMedia("(max-width:767px)").matches) {
  header.style.top = "0";
} else {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  }
}

// Открытие бургер меню
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLink = document.querySelectorAll('.menu__link')
const menuList = document.querySelector('.menu__list')
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

// Закрытие при нажатии на ссылку 

menuLink.forEach((item) => {
  item.onclick = function () {
    menuBody.classList.remove('_active');
    iconMenu.classList.remove('_active');
    document.body.classList.remove('_lock')
  }
})

//Закрытие при клике на другую область 

window.addEventListener('click', e => {
  const target = e.target
  if(target == menuBody) {
    menuBody.classList.remove('_active');
    iconMenu.classList.remove('_active');
    document.body.classList.remove('_lock')
  }
})

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

    if (panel.style.display === "block") {
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


//Modal 

var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.querySelectorAll("#myBtn");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный

btn.forEach((item) =>
  item.addEventListener('click', () => {
    modal.style.display = "flex"
    document.body.classList.add('_lock');
    document.querySelector('.wrapper').style.opacity = '0.7';
  })
)
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function () {
  modal.style.display = "none";
  document.body.classList.remove('_lock');
  document.querySelector('.wrapper').style.opacity = '1';
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('_lock');
    document.querySelector('.wrapper').style.opacity = '1';
  }
}