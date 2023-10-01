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

AOS.init();

if (localStorage.getItem('card') === null) {
    localStorage.setItem('card', JSON.stringify([]));
}

const buttons = document.querySelectorAll('.btn');
for (const btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        const pr_name = document.querySelector('.product-name').innerHTML;
        const pr_price = document.querySelector('.product-price').innerHTML;
        const pr_img = document.querySelector('.product-img').src;

        const basket = JSON.parse(localStorage.getItem('card'));

        const exist_prod = basket.find(pr => pr.name === pr_name);

        if (exist_prod === undefined) {
            basket.push({
                name: pr_name,
                price: pr_price,
                img: pr_img,
                Count: 1
            });
        } else {
            exist_prod.Count++;
        }


        localStorage.setItem('card', JSON.stringify(basket));
        BasketCount();
    }
}

function BasketCount() {
    const basket = JSON.parse(localStorage.getItem('card'));
    document.getElementById('heart-count').innerHTML = basket.length;
}
BasketCount();