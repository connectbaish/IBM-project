



function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })
    fixed.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    fixed.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })


    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}

var main = document.querySelector("#main")
var crsr = document.querySelector("#cursur")

main.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})

var page2 = document.querySelector("#page2")
var crsr2 = document.querySelector("#cursur2")

page2.addEventListener("mousemove", function(dets){
    crsr2.style.left = dets.x+"px"
    crsr2.style.top = dets.y+"px"
  
})
page2.addEventListener("mouseleave", function () {
    crsr2.style.display = "none"
})
page2.addEventListener("mouseenter", function () {
    crsr2.style.display = "block"
})

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
var swiper = new Swiper('.Slider' , {
    autoplay:true,
    speed:2500,
    loop:true,
    parallax:true,

    navigation:{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
});

menuAnimation()
loaderAnimation()
page4Animation()
swiperAnimation()