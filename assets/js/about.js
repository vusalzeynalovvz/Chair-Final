const english = document.getElementById('english');
const usd_all = document.getElementById('usd_all');
const salam = document.getElementById('salam');
const usd_click = document.getElementById('usd_click');
const arrow = document.getElementById('arrow');
const usd_arrow = document.getElementById('usd_arrow');

english.addEventListener('click', function () {
    if (salam.style.display === 'none') {
        salam.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';
    } else {
        salam.style.display = 'none';
        arrow.style.transform = 'rotate(0deg)';
    }
});

usd_all.addEventListener('click', function () {
    if (usd_click.style.display === 'none') {
        usd_click.style.display = 'block';
        usd_arrow.style.transform = 'rotate(180deg)';
    } else {
        usd_click.style.display = 'none';
        usd_arrow.style.transform = 'rotate(0deg)';
    }
});

const remove = document.getElementById('menu-remove');
const burger = document.getElementById('menu-burger');
const line_menu = document.getElementById('menu-line');

line_menu.addEventListener('click', function () {
    if (burger.style.display === 'none') {
        burger.style.display = 'block';
        remove.addEventListener('click', function () {
            burger.style.display = 'none';
        })
    } else {
        burger.style.display = 'none';
    }

})


$('#vusal').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});