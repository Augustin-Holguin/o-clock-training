const app = {
    dino: undefined,
    trex: undefined,
    init: () => {
        app.jumpListener();
        app.moveListener();
        app.dino = document.getElementById('player');
        app.trex = document.getElementById('t-rex');
        app.gameOver();
    },
    // listen to the user clicking on jump button
    jumpListener: () => {
        const btn = document.getElementById('jump');
        btn.addEventListener('click', () => {
            app.jump();
        })
    },
    // listen to keyboard arrow events
    moveListener: () => {
        document.addEventListener('keyup', (evt) => {
            // console.log(evt);
            const action = evt.code;
            app.moveDino(action);
        })
    },
    // function to make mini dino jump
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
    // function to make mini dino move along the x axis
    moveDino: (action) => {
        console.log(action);
    },
    // function to check if mini dino and trex have entered in collision
    // which results in ending the game
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