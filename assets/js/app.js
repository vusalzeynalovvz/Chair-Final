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

const targetDate = new Date("2023-12-31T23:59:59Z").getTime();
const countdown = document.getElementById("countdown");
const updateCountdown = () => {
    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;
    if (timeLeft <= 0) {
        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }
};
updateCountdown();
setInterval(updateCountdown, 1000);

