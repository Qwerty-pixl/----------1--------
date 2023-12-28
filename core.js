const burger = document.querySelector("#burger");
const menu_burger = document.querySelector("#menu_burger");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
burger.addEventListener("click", burgerHandler);

// Выполняем действия при клике ..
function burgerHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  menu_burger.classList.toggle("open");
  burger.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  menu_burger.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  menu_burger.classList.remove("open");
  burger.classList.remove("active");
  body.classList.remove("noscroll");
}

