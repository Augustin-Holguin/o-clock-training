const app = {
    dino: undefined,
    trex: undefined,
    init: () => {
        app.jumpListener();
        app.dino = document.getElementById('player');
        app.trex = document.getElementById('t-rex');
        app.gameOver();
    },
    jumpListener: () => {
        const btn = document.getElementById('jump');
        btn.addEventListener('click', () => {
            app.jump();
        })
    },
    jump: () => {
        if (app.dino.className === 'jump') {
            return;
        } else {
            app.dino.classList.add('jump');
            setTimeout(() => {
                app.dino.classList.remove('jump');
            }, 1200)
        }
    },
    gameOver: () => {
        setInterval(() => {
            const dinoTop = app.dino.computedStyleMap().get('top').value;
            const trexLeft = app.trex.computedStyleMap().get('left').value;
            if (dinoTop > 200 && trexLeft < -43.2) {
                alert('lost');
            }
        }, 10);
    }
}

app.init();