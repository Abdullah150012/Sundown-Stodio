const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let elemC = document.querySelector("#elem-container");
let fixed = document.querySelector("#fixed-image");

elemC.addEventListener("mouseover", () =>{
    fixed.style.display = "block"
});
elemC.addEventListener("mouseout", () =>{
    fixed.style.display = "none"
});

let elems = document.querySelectorAll(".elem");
elems.forEach((e)=>{
    e.addEventListener("mouseover", ()=>{
        let image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
})
fixed.addEventListener("mouseover", ()=>{
    fixed.style.display = "block"
})
fixed.addEventListener("mouseout", ()=>{
    fixed.style.display = "none"
})

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3.5,
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });