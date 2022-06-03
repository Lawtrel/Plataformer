const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

   const canoPosition = cano.offsetLeft;
   const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', "");
   
   if (canoPosition <= 120 && canoPosition > 0 && marioPosition < 80) {
       cano.style.animation = 'nome';
       cano.style.left = '${canoPosition}px';

       mario.style.animation = 'nome';
       mario.style.left = '${marioPosition}px';

       mario.src = './img/game-over.png';
       mario.style.width = '75px';
       mario.style.marginLeft = '50px';

       clearInterval(loop);
   }

 

}, 10);

document.addEventListener('keyup', jump);