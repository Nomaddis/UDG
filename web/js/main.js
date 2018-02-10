
$(document).ready(function(){

    /* ------ search form ----- */
    let	search_form_wrap = $(".search_form_wrap");

    $('.button_wrap').on("click", function(){
        search_form_wrap.toggleClass('active');
        //console.log('button search click');
    });

    $('.search_close').on("click", function () {
        search_form_wrap.removeClass("active");
    });

    /* ---------------- main slider -----------------(using slick slider) ------- */

    $('.main-slider').slick({
        arrows: true,
        prevArrow: $('.main-slider-nav .arrow-left'),
        nextArrow: $('.main-slider-nav .arrow-right'),
        adaptiveHeight: true
        //setting-name: setting-value
    });

    $('.main-slider').on('afterChange', function(slick, currentSlide){
        $(".current-slide").text(($('.main-slider').slick('slickCurrentSlide'))+1);
    });
    $(".qty-of-slides").text(($('.main-slider').slick('getDotCount'))+1);

    /* --------------- main slider end -------------------------*/

    /**
     * Plugin for correct zoom images
     */
    $('.box').each(function() {
        //set size
        let th = $(this).height(),//box height
            tw = $(this).width(),//box width
            im = $(this).children('img'),//image
            ih = im.height(),//inital image height
            iw = im.width();//initial image width
        if (ih>iw) {//if portrait
            im.addClass('ww').removeClass('wh');//set width 100%
        } else {//if landscape
            im.addClass('wh').removeClass('ww');//set height 100%
        }
        //set offset
        let nh = im.height(),//new image height
            nw = im.width(),//new image width
            hd = (nh-th)/2,//half dif img/box height
            wd = (nw-tw)/2;//half dif img/box width
        if (nh<nw) {//if portrait
            im.css({marginLeft: '-'+wd+'px', marginTop: 0});//offset left
        } else {//if landscape
            im.css({marginTop: '-'+hd+'px', marginLeft: 0});//offset top
        }
    });


    /* ============== animate mouse scroll btn =================== */

    $(".main-slider-scroll").on("click","a", function (event) {

        event.preventDefault();
        let id  = $(this).attr('href'),

            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1300);
    });
    $('.show-mobile-menu__btn').on("click", function () {
       $('.navbar').toggleClass('active');
        $(this).toggleClass('active');
    });


    //======= footer form =======

    $('.hidden-input')
        .focusin(function () {
            $(this).siblings('span').toggleClass('active');
        })
        .focusout(function () {
            $(this).siblings('span').toggleClass('active');
        });
/*
*change lang text on click
 */
    $('.dropdown-content a').on("click", function () {
        $('.dropbtn__lang').html(this.innerHTML);
    });

/**
* change counter
*  must be request for some API with asking for counter object
*  @counter object from server with actual numbers
 */
    let counter = {
        worth: 41,
        land: 8,
        years: 9
    };
    window.setTimeout(
        () => {
            $('.counter-text__item_worth').fadeOut(
                1000,
                function () {
                    $('.counter-text__item_worth').html(counter.worth).fadeIn(1000);
                }
            );
            $('.counter-text__item_land').fadeOut(
                1000,
                function () {
                    $('.counter-text__item_land').html(counter.land).fadeIn(1000);
                }
            );
            $('.counter-text__item_years').fadeOut(
                1000,
                function () {
                    $('.counter-text__item_years').html(counter.years).fadeIn(1000);
                }
            );
        }
    , 1000);
});

