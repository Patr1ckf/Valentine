const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const container = document.getElementById('container');
const h1 = document.querySelector('h1');
const gif = document.getElementById('main-gif');

var counter = 0;

// Funkcja uciekania przycisku NIE
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