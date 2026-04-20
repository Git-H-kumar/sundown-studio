const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth:true
})

function page4Animation(){
let img = document.querySelector("#fixed-image");
let elemC = document.querySelectorAll("#elem-container");    

elemC.forEach(function(item){
    item.addEventListener("mouseenter" , function(){
        img.style.display = "block";
    })
})

elemC.forEach(function(item){
    item.addEventListener("mouseleave" , function(){
        img.style.display = "none";
    })
})

let elem = document.querySelectorAll(".elem");                                                              
elem.forEach(function(view){
   view.addEventListener("mouseenter",function(){
    let image = view.getAttribute("data-image");
    img.style.backgroundImage = `url(${image})`;
   });
});
}

// swiper for page 4
function swiperAnimation(){
 var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

}


page4Animation();
swiperAnimation();



