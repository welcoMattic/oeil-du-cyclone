import $ from 'jquery';
import 'bootstrap';
import tippy from 'tippy.js';
import lozad from 'lozad';

const el = document.querySelectorAll('img');
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();

// x4 soft colors to get more chances
let primaryColors = [
    '#ff5500', '#680ff4', '#3bdbb5', '#fff800', '#ff31ac', '#aefffb', // hard colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
    '#e6fffb', '#ffe9ba', '#d5dfd6', // soft colors
];
let secondaryColors = {
    '#e6fffb' : '#204bbb', // bleu / blue
    '#ffe9ba' : '#3201bc', // beige / purple
    '#d5dfd6' : '#d81d32', // grey / red
    '#aefffb' : "#ff0000",
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
            $(img).css({'filter': 'invert(15%) sepia(56%) saturate(6806%) hue-rotate(227deg) brightness(85%) contrast(77%)'});
            $(img).css({'filter': 'invert(15%) sepia(56%) saturate(6806%) hue-rotate(227deg) brightness(85%) contrast(77%)'});
        }
        if (colorDir === 'violet') {
            $(img).css({'filter': 'invert(13%) sepia(88%) saturate(5645%) hue-rotate(258deg) brightness(69%) contrast(127%)'});
            $(img).css({'filter': 'invert(13%) sepia(88%) saturate(5645%) hue-rotate(258deg) brightness(69%) contrast(127%)'});
        }
        if (colorDir === 'rouge') {
            $(img).css({'filter': 'invert(19%) sepia(69%) saturate(6671%) hue-rotate(346deg) brightness(89%) contrast(89%)'});
            $(img).css({'filter': 'invert(19%) sepia(69%) saturate(6671%) hue-rotate(346deg) brightness(89%) contrast(89%)'});
        }
    });
});

$(document).on('scroll', function () {
    const navPosition = $('nav.nav').position();
    if ($(this).scrollTop() >= navPosition.top) {
        $('.header-container').addClass('sticky-top');
    } else {
        $('.header-container').removeClass('sticky-top');
    }
});

// Only on screens wider than 600px
if (window.matchMedia("(min-width: 600px)").matches) {
    tippy('.project-item', {
        followCursor: true,
        offset: '100, 30',
        placement: 'right',
    });
} else {
    $('h1').addClass('h3');
    $('#scroller').on('click', () => {
        $('html, body').animate({
            scrollTop: ($('.header-container').offset().top)
        }, 500, () => {
            $('.header-container').addClass('sticky-top');
        });
    });
}

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
    observer.observe();
});

$('#collapseSkill1, #collapseSkill2, #collapseSkill3, #collapseSkill4').on('hidden.bs.collapse', event => {
    $('#presentation-left-background')
        .css('background-image', `url(build/images/skills/odc-images-presentation-general.png)`)
        .css('background-position', '80% 20%');
    observer.observe();
});