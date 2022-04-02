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

// -- Onload for Navbar
window.onload = function() {
    if (window.pageYOffset == 0) {
        //Scroll Top
        myNav.style.backgroundColor = "transparent";
        myNav.style.boxShadow = "none"
    } else {
        //Scroll Down
        myNav.style.backgroundColor = "white";
        myNav.style.boxShadow = "0 4px 2px -2px rgba(0,0,0,.2)"
    }

};

// -- Developer Link

document.querySelector('.developer-link').addEventListener('click', function() {
    window.open('https://github.com/Warren997');
})


/*
// -- Statistics Counter Up
$('.counter-count').each(function() {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {

        //chnage count up speed here
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(this).text(Math.ceil(now));
        }
    });
});
*/

if ($(window).width() < 576) {
    //alert('Less than 960');
    document.getElementById("newsIframe").width = "300";
    document.getElementById("newsIframe").src = "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDACCO1999&tabs=timeline&width=300&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId";
} else {
    //alert('More than 960');
    document.getElementById("newsIframe").width = "500";
}