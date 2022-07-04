'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Ліга Справедливості",
        "Ла-ла ленд",
        "Одержимість",
        "Скотт Пілігрим проти..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      title = document.querySelector('.promo__interactive-title');


adv.forEach(item => {
    item.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';

movieList.innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

const btn = document.querySelectorAll('.promo__menu-item');

btn[0].addEventListener('click', () => {
    alert('Click');
});

// const showElement = (e) => {
//     console.log(e.target);
// };


let i = 0;
const showElement = (e) => {
    console.log(e.target);
    
    i++;

    if (i == 1) {
        btn[1].removeEventListener('click', showElement);
    }
};

btn[1].addEventListener('click', showElement);
