const app = {
    nbPixel: undefined,
    pxSize: undefined,
    pxColor: {
        one: '#D2DAE2',
        two: '#485460',
        three: '#FBC048',
        four: '#79EA83'
    },
    choosenColor: undefined
    ,
    init: () => {
        app.colorizer();
        app.formClick();
    },
    formClick: () => {
        const button = document.querySelector('button');
        button.addEventListener('click', (evt) => {
            app.playerInputs();
        })
    },
    playerInputs: () => {
        const form = document.querySelector('.form');
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            app.nbPixel  = evt.target[0].value;
            app.pxSize = evt.target[1].value;
            app.createBoard(app.nbPixel, app.pxSize);            
        })        
    },
    createBoard: (nbPixel, pxSize) => {
        const main = document.querySelector('.board');
        main.innerHTML = '';  

        for (let i = 0; i < nbPixel; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            
            for (let j = 0; j < nbPixel; j++) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.height = pxSize + 'em';
                pixel.style.width = pxSize + 'em';
                row.appendChild(pixel);
                pixel.addEventListener('click', app.handleClick);
            }
            main.appendChild(row);
        }
        
    },
    handleClick: (evt) => {
        const px = evt.target;
        px.style.background = app.choosenColor;
    },
    colorizer: () => {
        const colors = document.getElementsByClassName('colors');
        colors[0].addEventListener('click', (evt) => {
            if (evt.target.className === 'colors__color color-1') {
            app.choosenColor = app.pxColor.one;
            } else if (evt.target.className === 'colors__color color-2') {
            app.choosenColor = app.pxColor.two;
            } else if (evt.target.className === 'colors__color color-3') {
            app.choosenColor = app.pxColor.three;
            } else {
            app.choosenColor = app.pxColor.four;
            }
        })
    }
}

app.init();

