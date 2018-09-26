import $ from 'jquery';
import 'bootstrap';

let primaryColors = [
    'odcorange',
    'odcviolet',
    'odcblue',
    'odcyellow',
    'odcpink',
    'odcred'
]
let primaryColor = primaryColors[Math.floor(Math.random() * primaryColors.length)]

$(document).ready(() => {
    $('body, #projects-block .card').css('background-color', `var(--${primaryColor})`);
    $('.text-odcprimary, .text-fill-odcprimary').css('color', `var(--${primaryColor})`);
    $('.header-container .text-superhero').hover(function (event) {
        if (event.type === 'mouseenter') {
            $(this).css('text-shadow', `4px 4px 0px var(--dark), 5px 5px 0px var(--${primaryColor}), 8px 8px 0px var(--dark), 9px 9px 0px var(--${primaryColor}), 12px 12px 0px var(--dark), 13px 13px 0px var(--${primaryColor})`);
        } else {
            $(this).css('text-shadow', '');
        }
    });
    $('.border-odcprimary').css('border-color', `var(--${primaryColor})`);
    $('#projects-block .card .project-item').hover(function (event) {
        if (event.type === 'mouseenter') {
            $(this).find('h3')
                .addClass('text-fill-odcprimary').removeClass('text-dark')
                .css('color', `var(--${primaryColor})`);
        } else if ($(this).hasClass('collapsed')) {
            $(this).find('h3').removeClass('text-fill-odcprimary').addClass('text-dark')
                .css('color', `var(--dark)`);
        }
    });
    $('#projects-block .card .project-item:not(.collapsed) h3').css('color', `var(--${primaryColor})`);
    $('#presentation-left-background').css('background-color', `var(--${primaryColor})`);
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > 875) {
        $('.header-container').addClass('sticky-top');
    } else {
        $('.header-container').removeClass('sticky-top');
    }
});

$('#scroller').on('click', event => {
    $('html, body').animate({
        scrollTop: ($('.header-container').offset().top)
    }, 500, () => {
        $('.header-container').addClass('sticky-top');
    });
});

$('.project-close-btn').on('click', event => {
    const $target = $($(event.currentTarget).data('target'));
    $target.collapse('hide');
});
