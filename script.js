document.addEventListener('DOMContentLoaded', () => {
    const interBubble = document.querySelector('.interactive');
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
        requestAnimationFrame(move);
    };

    window.addEventListener('mousemove', (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();

    // D-Day 카운트다운
    const countdownElement = document.getElementById('countdown-timer');

    const targetDate = new Date('2024-08-23T16:30:00+09:00'); // 목표 날짜를 한국 시간으로 설정

    const updateCountdown = () => {
        const now = new Date();
        const timeDiff = targetDate - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}일 ${hours}시 ${minutes}분 ${seconds}초`;

        if (timeDiff <= 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'D-Day!';
        }
    };

    updateCountdown(); // 페이지 로드 시 초기화
    const countdownInterval = setInterval(updateCountdown, 1000); // 매초 업데이트
});
