/**
 * Created by Admin on 16-Mar-17.
 */
//
$(function () {
    $('.subscribe-form .input-group input').focusout(function () {
        var text_val = $(this).val();
        if(text_val === '') {
            $(this).removeClass('has-value');
        }
            else {
                $(this).addClass('has-value')
            }
    });
});

$(function () {
    $('.contact-form .input-group_contact input').focusout(function () {
        var contactVal = $(this).val();
        if (contactVal === '') {
            $(this).removeClass('active-stuff');
        }
        else {
            $(this).addClass('active-stuff')
        }
    });
});



$('.animated-gallery').masonry({
    itemSelector: '.grid-item',
    columnWidth: 160
});


$('.grid-item').each(function(i) {
    setTimeout(function() {
        $('.grid-item').eq(i).addClass('is-visible');
    }, 200 * i);
});



$(document).ready(function () {
    $('.crew-member').hover(function () {
        $(this).parent('div').find('.animated-hover-box').css({'display': 'block'})
    },function() {
        $(this).parent('div').find('.animated-hover-box').css({'display': 'none'});
    });

    $('.animated-hover-box').hover(function (event) {
        // event.stopPropagation();
        $(this).show();
    },function() {
        // event.stopPropagation();
        $(this).hide();
    });
    $('.news-01,.news-02').hover(function () {
            $(this).parent('div').find('.news-hover-box').css({'display': 'block'})
        },
        function() {
            $(this).parent('div').find('.news-hover-box').css({'display': 'none'});
        });
    $('.mobile-menu-wrapper').hide();

});



