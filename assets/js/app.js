import $ from 'jquery';
import 'bootstrap';

// x4 soft colors to get more chances
let primaryColors = [
    '#ff5500', '#680ff4', '#3bdbb5', '#fff800', '#ff31ac', '#ff0000', // hard colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
];
let secondaryColors = {
    '#e6fffb' : '#204bbb', 
    '#ffe9ba' : '#3201bc', 
    '#d5dfd6' : '#d81d32',
};

let primaryColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
let secondaryColor = secondaryColors[primaryColor] || '#000000';

console.log(primaryColor, secondaryColor);

$(document).ready(() => {
    $('html').attr('style', `--theme-odc: ${primaryColor}; --theme-odc-sec: ${secondaryColor}; --dark: ${secondaryColor}`);

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

$('.skill-content').on('shown.bs.collapse', function (event) {
    let bgFile = $(this).data('bg-file');
    let bgPosition = $(this).data('bg-position');
    $('#presentation-left-background')
        .css('background-image', `url(build/images/skills/${bgFile})`)
        .css('background-position', bgPosition);
});

$('#collapseSkill1, #collapseSkill2, #collapseSkill3, #collapseSkill4').on('hidden.bs.collapse', event => {
    $('#presentation-left-background')
        .css('background-image', 'url(build/images/skills/odc-images-presentation-general.png)')
        .css('background-position', '80% 20%');
});