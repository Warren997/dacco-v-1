// ------------- Header Onscroll

var myNav = document.getElementById('nav');
window.onscroll = function() {
    "use strict";
    if (window.pageYOffset == 0) {
        //Scroll Top
        myNav.style.backgroundColor = "transparent";
        myNav.style.boxShadow = "none"
    } else if (window.pageYOffset < 88) {
        //Scroll Down
        myNav.style.backgroundColor = "white";
        myNav.style.boxShadow = "0 4px 2px -2px rgba(0,0,0,.2)"
    }
};