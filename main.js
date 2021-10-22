// disposizione del menu hamburger in <1000 px

const hamico = document.querySelector(".fa-bars");
const hamMenu = document.querySelector(".hamburger-menu");
const xMenu = document.querySelector(".fa-times");


hamico.addEventListener( "click",

    function()
    {
        hamMenu.style.display = "block";
    }

);
xMenu.addEventListener( "click",

    function()
    {
        hamMenu.style.display = "none";
    }

);