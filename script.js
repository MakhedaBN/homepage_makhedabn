document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector('#menu');
    const navBar = document.querySelector('.menu');

    menuBtn.addEventListener("click", function() {
        menuBtn.classList.toggle("click");
        navBar.classList.toggle("active");
        console.log("clicked");
    });
});
