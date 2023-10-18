const menuBtn = document.querySelector(".bx-menu"),
ul = document.querySelector("header ul"),
searchBtn = document.querySelector(".icons .bx-search"),
searchBar = document.querySelector(".search-bar");

menuBtn.addEventListener("click", () => {
    if(menuBtn.classList.contains("bx-menu")){
        menuBtn.classList.replace("bx-menu", "bx-x");
    }else{
        menuBtn.classList.replace("bx-x", "bx-menu");
    }
    ul.classList.toggle("active");
});

searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("active");
});