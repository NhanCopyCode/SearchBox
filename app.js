var btnSearch = document.querySelector('.btn')

var input = document.querySelector('.input')

var search_box = document.querySelector('.search-box')

btnSearch.onclick = function(e) {
    search_box.classList.toggle('search-box-width')
    input.focus();
}