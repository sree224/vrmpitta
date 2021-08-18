// Mobile Menu
let nav = document.querySelector("nav"); 
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
let logoOne = document.querySelector(".logo");


menuBtn.onclick = function (){
  navBar.classList.add("active");
  menuBtn.style.opacity ="0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
}

cancelBtn.onclick = function (){
  navBar.classList.remove("active");
  menuBtn.style.opacity ="1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
} 

// Side Navigation Bar Close While We click On Navigation Links

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i < navLinks.length; i++){
  navLinks[i].addEventListener("click", function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
  })
}

// coockies 
const $$cookieDisclaimer = document.querySelector(".js-cookie-disclaimer");

if (!localStorage.getItem("cookieDisclaimer")) {
    $$cookieDisclaimer.classList.add("is-active");
}

$$cookieDisclaimer.querySelector("button").addEventListener("click", () => {
    localStorage.setItem("cookieDisclaimer", true);
    $$cookieDisclaimer.classList.remove("is-active");
});
function closebtn() {
    document.getElementById("des_close").style.display = "none";
}



// Scroll Fixed
window.onscroll = function (){
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    logoOne.classList.add("active");
    menuBtn.classList.add("active");
  }else{
    nav.classList.remove("sticky");
    logoOne.classList.remove("active");
    menuBtn.classList.remove("active");
  }

// counter on scroll 
var number = 0;
var oTop = $('#counter').offset().top - window.innerHeight;
if (number == 0 && $(window).scrollTop() > oTop) {
  $('.counter-value').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');
    $({
      countNum: $this.text()
    }).animate({
        countNum: countTo
      },

      {

        duration: 2000,
        easing: 'swing',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum); 
        }

      });
  });
}



}


// silk slider testmonial

$('.testimonials').click({
  dots: false,
  infinite: true, 
  slidesToShow: 1, 
  slidesToScroll:1,
  autoplay:true,
  cssEase:'linear',
  silde:'li',
  arrows:false,
});

// back to top button

var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

// coockies 

