const app = {
    nbPixel: 8,
    pxSize: 2,
    pxColor: {
        one: '#D2DAE2',
        two: '#485460',
        three: '#FBC048',
        four: '#79EA83'
    },
    choosenColor: undefined
    ,
    init: () => {
        app.createBoard();
        app.colorizer();
    },
    createBoard: () => {
        const main = document.querySelector('.board');  

        for (let i = 0; i < app.nbPixel; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            
            for (let j = 0; j < app.nbPixel; j++) {
                const pixel = document.createElement('div');
                pixel.className = 'pixel';
                pixel.style.height = app.pxSize + 'em';
                pixel.style.width = app.pxSize + 'em';
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

