/*Adaptive menu open*/

$(".open_menu_btn").on("click", function() {
    $('html .bg_overlay').one('click',function() {
        $(".bg_overlay").removeClass("active");
        $(".nav_list.tablet_ver").removeClass("opened");
    });
    $(".nav_list.tablet_ver").toggleClass("opened");
    $(".bg_overlay").toggleClass("active");
    event.stopPropagation();
});

$(".slide_gallery_btn").on("click", function() {
    $(".space_people").toggleClass("active");
    event.stopPropagation();
});


/*Adaptive menu open*/

/*remove gallery br*/
$(document).ready(function(){
    $(".gallery br").remove();
});
/*remove gallery br*/
/*Gallery Captions*/

$('.gallery .gallery-item .gallery-caption').each(function(){
    var text = $(this).text().split('\n');
    for( var i = 0, len = text.length; i < len; i++ ) {
        text[i] = '<span class="word-' + i + '">' + text[i] + '</span>';
    }
    $(this).html(text.join(' '));

});

$( ".gallery .gallery-item" ).wrapInner( "<div class='content'></div>");
/*Gallery Captions*/
/*Lang list*/

$(".lang_container .lang-active a").removeAttr("href");
// Dropdown toggle
$('.lang-active').click(function() { $(this).next('.lang-list').slideToggle();
});

$(document).click(function(e)
{
    var target = e.target;
    if (!$(target).is('.lang-active') && !$(target).parents().is('.lang-active'))
//{ $('.dropdown').hide(); }
    { $('.lang-list').slideUp(); }
});

/*Lang list*/


//Swiper
new Swiper(".swiper-container-main",{
    direction: "horizontal",
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
        /*type: 'fraction'*/
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    spaceBetween: 0,
    speed: 1500,
    autoplay:
    {
        delay: 5000
    },
    effect: "fade"
});

