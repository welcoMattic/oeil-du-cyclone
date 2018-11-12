import $ from 'jquery';
import 'bootstrap';
import tippy from 'tippy.js'

// x4 soft colors to get more chances
let primaryColors = [
    '#ff5500', '#680ff4', '#3bdbb5', '#fff800', '#ff31ac', '#ff0000', // hard colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
];
let secondaryColors = {
    '#e6fffb' : '#204bbb', // bleu / blue
    '#ffe9ba' : '#3201bc', // beige / purple
    '#d5dfd6' : '#d81d32', // grey / red
    '#ff0000' : "#aefffb",
};

let primaryColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
let secondaryColor = secondaryColors[primaryColor] || '#000000';

let colorDir = 'noir';
switch (primaryColor) {
    case '#e6fffb':
        colorDir = 'bleu';
    break;
    case '#ffe9ba':
        colorDir = 'violet';
    break;
    case '#d5dfd6':
        colorDir = 'rouge';
    break;
}

$(document).ready(() => {
    $('html').attr('style', `--theme-odc: ${primaryColor}; --theme-odc-sec: ${secondaryColor}; --dark: ${secondaryColor}`);

    $('#projects-block .card').hover(function (event) {
        if (event.type === 'mouseenter') {
            $(this).find('.bg-card').show();
            $(this).find('.bg-card-hover').addClass('active');
            $(this).find('.project-item h3')
                .addClass('text-fill-odcprimary').removeClass('text-dark');
        } else if ($(this).find('.project-item').hasClass('collapsed')) {
            $(this).find('.bg-card-hover').removeClass('active');
            $(this).find('.project-item h3')
                .removeClass('text-fill-odcprimary').addClass('text-dark');
        } else if (event.type === 'mouseleave' && !$(this).find('.project-item').hasClass('collapsed')) {
            $(this).find('.bg-card-hover').addClass('active');
            $(this).find('.bg-card').hide();
        }
    });

    $('#clients-grid a img').each(function(i, img) {
        const classes = ['pen-1', 'pen-2', 'pen-3'];
        $(img).parent().addClass(classes[Math.floor(Math.random() * classes.length)]);

        if (colorDir === 'bleu') {
            $(img).parent().css({'filter': 'invert(15%) sepia(56%) saturate(6806%) hue-rotate(227deg) brightness(85%) contrast(77%)'});
            $(img).parent().css({'filter': 'invert(15%) sepia(56%) saturate(6806%) hue-rotate(227deg) brightness(85%) contrast(77%)'});
        }
        if (colorDir === 'violet') {
            $(img).parent().css({'filter': 'invert(13%) sepia(88%) saturate(5645%) hue-rotate(258deg) brightness(69%) contrast(127%)'});
            $(img).parent().css({'filter': 'invert(13%) sepia(88%) saturate(5645%) hue-rotate(258deg) brightness(69%) contrast(127%)'});
        }
        if (colorDir === 'rouge') {
            $(img).parent().css({'filter': 'invert(19%) sepia(69%) saturate(6671%) hue-rotate(346deg) brightness(89%) contrast(89%)'});
            $(img).parent().css({'filter': 'invert(19%) sepia(69%) saturate(6671%) hue-rotate(346deg) brightness(89%) contrast(89%)'});
        }
    });
});

tippy('.project-item', {
    followCursor: true,
    offset: '100, 30',
    placement: 'right',
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
        .css('background-image', `url(build/images/skills/${colorDir}/${bgFile})`)
        .css('background-position', bgPosition);
});

$('#collapseSkill1, #collapseSkill2, #collapseSkill3, #collapseSkill4').on('hidden.bs.collapse', event => {
    $('#presentation-left-background')
        .css('background-image', `url(build/images/skills/${colorDir}/odc-images-presentation-general.png)`)
        .css('background-position', '80% 20%');
});