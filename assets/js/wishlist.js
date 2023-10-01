// const english = document.getElementById('english');
// const usd_all = document.getElementById('usd_all');
// const salam = document.getElementById('salam');
// const usd_click = document.getElementById('usd_click');
// const arrow = document.getElementById('arrow');
// const usd_arrow = document.getElementById('usd_arrow');

// english.addEventListener('click', function () {
//     if (salam.style.display === 'none') {
//         salam.style.display = 'block';
//         arrow.style.transform = 'rotate(180deg)';
//     } else {
//         salam.style.display = 'none';
//         arrow.style.transform = 'rotate(0deg)';
//     }
// });

// usd_all.addEventListener('click', function () {
//     if (usd_click.style.display === 'none') {
//         usd_click.style.display = 'block';
//         usd_arrow.style.transform = 'rotate(180deg)';
//     } else {
//         usd_click.style.display = 'none';
//         usd_arrow.style.transform = 'rotate(0deg)';
//     }
// });

// const remove = document.getElementById('menu-remove');
// const burger = document.getElementById('menu-burger');
// const line_menu = document.getElementById('menu-line');

// line_menu.addEventListener('click', function () {
//     if (burger.style.display === 'none') {
//         burger.style.display = 'block';
//         remove.addEventListener('click', function () {
//             burger.style.display = 'none';
//         })
//     } else {
//         burger.style.display = 'none';
//     }

// })

const basket = JSON.parse(localStorage.getItem('card'));
const table = document.querySelector('.wishlist-all');

basket.forEach(item => {
    table.innerHTML += `
    <div class="wishlist flex flex-col gap-[45px]">
    <div style="width: 800px; margin: 0 auto;" class="wishlist1 mt-[10%] flex  border-b-[1px] p-2 ">
        <div class="wish-left w-[326px] flex items-center">
            <div class="wish-img">
                <img class="w-[80px] h-[80px] object-cover mt-[10px]"
                    src="${item.img}"
                    alt="">
            </div>
            <div class="wish-name flex flex-col gap-[10px] ml-[15px]">
                <p class="font-black text-[#212529] text-[16px]">${item.name}</p>
            </div>
        </div>
        <div class="wish-right w-[498px] flex justify-between items-center">
            <p class="text-[16px] font-semibold text-[#212529]">${item.price}</p>
            <span class="border-[1px] border-none p-[5px] text-[#9a884b] bg-[#f7f5ef] rounded-[5px]">In
                Stock</span>
            <img class="w-[32px] h-[32px]" src="/assets/image/img.icons5.png" alt="araba">
            <i data-id="${item.id}" class="fa-solid fa-x cursor-pointer"></i>
        </div>
    </div>
</div>
    `

});


