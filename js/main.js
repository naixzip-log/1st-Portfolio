/* intro */
$(function() {
    $(".intro_sec .btn").click(function() {
        $(".clouds").eq(0).fadeOut(500);
        $(".clouds").eq(1).fadeOut(1000);
        $(".clouds").eq(2).fadeOut(1500);
        $(".intro_sec .slogan_group").fadeOut(3000);
        $(".intro_sec").fadeOut(3000);
        $("body").removeClass('no_scroll');
        setTimeout(function() {
            $(".main_sec").fadeIn(3000);
            $(".main_sec").addClass("on")
        }, 2500)
    });
    // 새로고침 시 ScrollTop 이동
    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    };
});

/* main - cursor */
$(function() {
    const cursor = document.querySelector('#cursor');
    const cursorCircle = document.querySelector('.cursor_circle');

    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 }; 
    const speed = 0.1; 

    const updateCoordinates = e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', updateCoordinates);


    function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
    }

    function getSqueeze(diffX, diffY) {
        const distance = Math.sqrt(
            Math.pow(diffX, 2) + Math.pow(diffY, 2)
        );
        const maxSqueeze = 0.15;
        const accelerator = 1500;
        return Math.min(distance / accelerator, maxSqueeze);
    }


    const updateCursor = () => {
        const diffX = Math.round(mouse.x - pos.x);
        const diffY = Math.round(mouse.y - pos.y);
        
        pos.x += diffX * speed;
        pos.y += diffY * speed;
        
        const angle = getAngle(diffX, diffY);
        const squeeze = getSqueeze(diffX, diffY);
        
        const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) +')';
        const rotate = 'rotate(' + angle +'deg)';
        const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

        cursor.style.transform = translate;
        cursorCircle.style.transform = rotate + scale;
    };

    function loop() {
        updateCursor();
        requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    const cursorModifiers = document.querySelectorAll('[cursor-class]');

    cursorModifiers.forEach(curosrModifier => {
        curosrModifier.addEventListener('mouseenter', function() {
            const className = this.getAttribute('cursor-class');
            cursor.classList.add(className);
        });
        
        curosrModifier.addEventListener('mouseleave', function() {
            const className = this.getAttribute('cursor-class');
            cursor.classList.remove(className);
        });
    });


    /* project - website */
    $(function(){
        var swiper = new Swiper(".swiper", {
            clickable: true,
            slidesOffsetAfter : 140,
            loopAdditionalSlides : 1,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            },
        });
    });
});
/* project - popup */
$(function(){
    $('.site01').click(function(){
        $('.info01').fadeIn(0);
        $('.popup_black_bg').fadeIn(0);
    });
    $('.site02').click(function(){
        $('.info02').fadeIn(0);
        $('.popup_black_bg').fadeIn(0);
    });
    $('.site03').click(function(){
        $('.info03').fadeIn(0);
        $('.popup_black_bg').fadeIn(0);
    });
    $('.site04').click(function(){
        $('.info04').fadeIn(0);
        $('.popup_black_bg').fadeIn(0);
    });
    $('.site05').click(function(){
        $('.info05').fadeIn(0);
        $('.popup_black_bg').fadeIn(0);
    });
    $('.site06').click(function(){
        $('.popup_black_bg').fadeIn(0);
        $('.info06').fadeIn(0);
    });
    $('.x').click(function(){
        $('.info').fadeOut(0);
        $('.popup_black_bg').fadeOut(0);
    });
});


/* contact - click send message */
$(function(){
    $('.contact_btn').click(function(){
        $('.contact_text_wrap').fadeOut(0);
        $('.contact_thanks').fadeIn(0);
    });
});



//panel
$(function(){
    $('.pannel_btn img').click(function(){
        $('.pannel').fadeToggle('6000');
    });
});

//scrollEvent - desktop
$(function(){
    $('.navigation #gnb .gnb_desktop01 span').click(function(){
        $(window).scrollTop(95);
    });
    $('.navigation #gnb .gnb_desktop02 span').click(function(){
        $(window).scrollTop(1178);
    });
    $('.navigation #gnb .gnb_desktop03 span').click(function(){
        $(window).scrollTop(2256);
    });
    $('.navigation #gnb .gnb_desktop04 span').click(function(){
        $(window).scrollTop(3337);
    });
});

//scrollEvent - tablet/mobile
$(function(){
    if(matchMedia("screen and (max-width: 767px)").matches){
        $('.pannel #gnb_mobile .gnb_mobile01').click(function(){
            $(window).scrollTop(0);
            $('.pannel').fadeOut('3000');
        });
        $('.pannel #gnb_mobile .gnb_mobile02').click(function(){
            $(window).scrollTop(687);
            $('.pannel').fadeOut('3000');
        });
        $('.pannel #gnb_mobile .gnb_mobile03').click(function(){
            $(window).scrollTop(1354);
            $('.pannel').fadeOut('3000');
        });
        $('.pannel #gnb_mobile .gnb_mobile04').click(function(){
            $(window).scrollTop(2023);
            $('.pannel').fadeOut('3000');
        });
    }else if(matchMedia("screen and (max-width: 1023px)").matches){
        $('.pannel #gnb_mobile .gnb_mobile01').click(function(){
            $(window).scrollTop(0);
            $('.pannel').fadeOut('3000');
        });
        $('.pannel #gnb_mobile .gnb_mobile02').click(function(){
            $(window).scrollTop(1063);
            $('.pannel').fadeOut('3000');
        });
        $('.pannel #gnb_mobile .gnb_mobile03').click(function(){
            $(window).scrollTop(2089);
            $('.pannel').fadeOut('3000');
        });
        $('.pannel #gnb_mobile .gnb_mobile04').click(function(){
            $(window).scrollTop(3111);
            $('.pannel').fadeOut('3000');
        });
    }
});