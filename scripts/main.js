// Выпадающее меню
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdown = document.querySelector('.header__dropdown');

// Открытие/закрытие меню при клике на кнопку
dropdownBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
});

// Закрытие меню при клике вне его
document.addEventListener('click', function(e) {
    if (!dropdown.contains(e.target)) {
        dropdownMenu.classList.remove('active');
    }
});

// Закрытие меню при клике на элемент
const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
        dropdownMenu.classList.remove('active');
    });
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

 
});

const likeOff = document.getElementById('likeoff');
const filledHeart = document.getElementById('filledHeart');

likeOff.addEventListener('click', () => {

    if(filledHeart.src.includes('images/icons/like.svg')) {
        filledHeart.src = 'images/icons/redlike.svg'; 
        } else {
            filledHeart.src = 'images/icons/like.svg';
        }
    });
