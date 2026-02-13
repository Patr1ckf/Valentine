const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const h1 = document.querySelector('h1');
const gif = document.getElementById('main-gif');
const music = document.getElementById('bg-music');

const correctPin = "06102025";

document.getElementById('pin-submit').addEventListener('click', checkPin);
document.getElementById('pin-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkPin();
});

function checkPin() {
    const input = document.getElementById('pin-input').value;
    const error = document.getElementById('pin-error');
    const overlay = document.getElementById('pin-overlay');

    if (input === correctPin) {
        overlay.style.display = 'none'; 
        createHearts();
    } else {
        error.style.display = 'block';
        document.getElementById('pin-input').value = '';
    }
}
var counter = 0;

const playMusic = () => {
    if (music.paused) {
        music.play().catch(e => console.log("Muzyka czeka na interakcję"));
    }
};

noBtn.addEventListener('mouseover', () => {
    if(counter < 3){
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
    
        noBtn.style.position = 'fixed';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }
    else{
        noBtn.style.display = 'none';
    }
    counter += 1;
});

yesBtn.addEventListener('click', () => {
    playMusic(); 
    
    h1.innerHTML = "KOCHAM CIĘ <br> buziaczki <br> ❤️";
    gif.src = "yay.gif";
    
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
    
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ff758f', '#c9184a']
    });
});

function createHearts() {
    const heartCount = 20;
    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
            createNewHeart();
        }, i * 600); 
    }
}

function createNewHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
    heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
    document.body.appendChild(heart);
    heart.addEventListener('animationend', () => {
        heart.remove();
        createNewHeart();
    });
}

window.onload = createHearts;