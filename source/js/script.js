window.onload = function() {
    var menu = document.querySelector('.btn-box__menu');

    menu.addEventListener('click', function(){
        menu.classList.toggle('active');
    });
    
    
    window.onresize = function(){
        showSlider();
    };

    var prev = document.querySelector('.slider-btn.prev');
    var next = document.querySelector('.slider-btn.next');
    var slideIndex = 1;

    prev.addEventListener('click', function(){
        showSlider();
    });

    next.addEventListener('click', function(){
        showSlider();
    });

    function showSlider() {
        var screen_width = document.documentElement.clientWidth;
        var slider = document.querySelectorAll('.slider li');

        if (slideIndex >= slider.length) {
            slideIndex = 1;
        }
    
        for (var i = 0; i < slider.length; i++) {
            slider[i].style.display = "none";
        }
        
        if(screen_width <= 768){
            slider[slideIndex-1].style.display = "flex";
        }
        else {
            slider[slideIndex].style.display = "flex";  
            slider[slideIndex-1].style.display = "flex";
        }  
        slideIndex++;
    }

    // setInterval(function() {
    //     showSlider();
    // }, 4000);
}