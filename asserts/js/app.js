const toggleBtn = document.getElementsByClassName('togglebtn')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

$(document).ready(function(){
    if($('.brands_slider').length)
    {
    var brandsSlider = $('.brands_slider');
    
    brandsSlider.owlCarousel(
    {
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    nav:false,
    dots:true,
    autoWidth:true,
    items:8,
    });
    
    if($('.brands_prev').length)
    {
    var prev = $('.brands_prev');
    prev.on('click', function()
    {
    brandsSlider.trigger('prev.owl.carousel');
    });
    }
    
    if($('.brands_next').length)
    {
    var next = $('.brands_next');
    next.on('click', function()
    {
    brandsSlider.trigger('next.owl.carousel');
    });
    }
    }
    
    
    });