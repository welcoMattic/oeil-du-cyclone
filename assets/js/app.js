import $ from 'jquery';
import 'bootstrap';

let primaryColors = ['#ff5400', '#680ff4', '#3bdbb5', '#fff800', '#ff31ac', '#ff0000'];
let primaryColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];

$(document).ready(() => {
    $('html').attr('style', `--theme-odc: ${primaryColor}`);
    $('#projects-block .card .project-item').hover(function (event) {
        if (event.type === 'mouseenter') {
            $(this).find('h3')
                .addClass('text-fill-odcprimary').removeClass('text-dark')
                .css('color', `var(--theme-odc)`);
        } else if ($(this).hasClass('collapsed')) {
            $(this).find('h3')
                .removeClass('text-fill-odcprimary').addClass('text-dark')
                .css('color', `var(--dark)`);
        }
    });
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > 875) {
        $('.header-container').addClass('sticky-top');
    } else {
        $('.header-container').removeClass('sticky-top');
    }
});

$('#scroller').on('click', () => {
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
