/*dropdown*/
const dropDownButton = document.querySelector('.dropdown-button');
const dropDownMenu = document.querySelector('.dropdown-menu');
/*вкл/выкл выпадающего списка*/
dropDownButton.addEventListener('click', () => {
    dropDownMenu.classList.toggle('dropdown-show');
})
/*клик вне пунктов меню*/
document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-button')) {
        dropDownMenu.classList.remove('dropdown-show');
    }
})

/*модалка languages
const modal2 = document.querySelector('#languages'); // получение доступа к модалке
const languages_btn = document.querySelector('#languages_btn'); // доступ к Become a host
const closeModal1 = document.querySelector('#close-button1'); // доступ к кнопке Close Modal внутри модалки

languages_btn.addEventListener("click", () => {
    modal2.showModal();
});


closeModal1.addEventListener("click", () => {
    modal2.close();
});*/

/* help-search */
const inputSearch = document.querySelector('.input-search');
const searchMenu = document.querySelector('.search-menu');

/* вкл/выкл выпадающего списка */
inputSearch.addEventListener('click', () => {
    searchMenu.classList.add('search-show');
})

// закрытие выпадающего списка по клику на пункты меню
const searchArticles = document.querySelectorAll('.search-menu__items');
searchArticles.forEach(item => {
    item.addEventListener('click', () => {
        searchMenu.classList.remove('search-show');
    })
})

/* кли вне пунктов меню */
document.addEventListener('click', (event) => {
    if (!event.target.closest('.search-menu') && !event.target.closest('.input-search')) {
        searchMenu.classList.remove('search-show');
    }
})


