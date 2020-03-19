// var header = document.getElementById('topnav');
// let color = document.querySelector('topnav');

//    var  div = document.getElementById('menutoggle');
//    let color = document.querySelector('menutoggle');

// window.onscroll = function () {

//     if (window.pageYOffset > 10) {

//         //            menutoggle.style.padding = "10px 40px";
//         topnav.style.background = "rgba(64, 62, 60, 0.9)";
//         topnav.style.padding = "10px 20px";
//         topnav.style.height = "80px";
//         topnav.style.fontFamily = "cursive";
//         topnav.style.textTransform = "capitalize";

//         //            topright.style.a.active.background = "gray";
//         //            topnav.style.width="100px";
//         // topnav.style.boxShadow = "0px 4px 2px brown";
//     }
//     else {
//         //            menutoggle.style.padding="0px";
//         topnav.style.fontFamily = "segoe ui";
//         topnav.style.background = "transparent";
//         topnav.style.textTransform = "Uppercase";
//         topnav.style.boxShadow = "none";
//         topnav.style.height = "55px";
//         topnav.style.padding = "10px";
//         topnav.style.width = "100%";
//     }
// }

// $('.carousel').carousel({
//     interval: 2000
// })

// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();
//     if (scroll < 300) {
//         $('.navbar').css('background', 'transparent');
//     } else {
//         $('.navbar').css('background', 'rgba(23, 162, 184, 0.9)');
//     }
// });
//
//
// $(window).on('scroll', function(){
//   if($(window).scrollTop()){
//     $('nav').addClass('navScroll');
//   }else {
//     $('nav').removeClass('navScroll');
//   }
// })

/**
 * Listen to scroll to change header opacity class
 */
// function checkScroll(){
//     let startY = $('.navbar').height() * 2; //The point where the navbar changes in px
//
//     if($(window).scrollTop() > startY){
//         $('.navbar').addClass("navScroll");
//     }else{
//         $('.navbar').removeClass("navScroll");
//     }
// }
//
// if($('.navbar').length > 0){
//     $(window).on("scroll load resize", function(){
//         checkScroll();
//     });
// }

// $('body').scrollspy({
//     target: ".navbar"
//   })


const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
  const offset = window.pageYOffset;
  if (offset > 75)
    nav.classList.add('scroll')
  else
    nav.classList.remove('scroll')
});

//smooth scrolling
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//
// new Glide(".images", {
//   type: 'carousel',
//   preview: 5,
//   focusAt: 'center',
//   gap: 40,
//   breakpoints: {
//     1200:{
//       preview: 3
//     },
//     800:{
//       preview: 2
//     }
//   }
// }).mount();
