// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countdown = () => {
        const now = new Date().getTime();
        const nextYear = new Date(`January 1, ${new Date().getFullYear() + 1} 00:00:00`).getTime();
        const distance = nextYear - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = '<h2>Happy New Year!</h2>';
        }
    };

    const interval = setInterval(countdown, 1000);
    countdown(); // Initial call to display correct time immediately
});
