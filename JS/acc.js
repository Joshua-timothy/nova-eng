// header banner secton
var acc = document.getElementsByClassName (`nav-icon-logo`);
var i;
var len = acc.length;
for(i = 0; i < len; i++) {
    acc[i].addEventListener(`click`,function() {
        this.classList.toggle(`active`);
        var nav_mobile_item = this.nextElementSibling;
        nav_mobile_item.style.maxHeight 
       ? nav_mobile_item.style.maxHeight = null
    : nav_mobile_item.style.maxHeight = nav_mobile_item.scrollHeight + `px`
        
    })
}


// slider using swiper js

  var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


  // 

// accordion section
var acc = document.getElementsByClassName (`accordion`);
var i;
var len = acc.length;
for(i = 0; i < len; i++) {
    acc[i].addEventListener(`click`,function() {
        this.classList.toggle(`active`);
        var panel = this.nextElementSibling;
    panel.style.maxHeighr 
    ? panel.style.maxHeight = null 
    : panel.style.maxHeight = panel.scrollHeight + `px`
        
    })
}
