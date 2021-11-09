class Carousel {
    /**
     * 
     * @param {HTMLElement} element 
     * @param {Object} options 
     * @param {Object} options.slidesToScroll -> number of elements to scroll
     * @param {Object} options.slidesVisible -> number of elements visible per slide
     */
    constructor (element, options = {}) { 
        this.element = element;
        this.options = Object.assign({}, {
            slidesToScroll: 1,
            slidesVisible: 1
        }, options);

    }
}

// wait for DOM to be loaded before executing JS
document.addEventListener('DOMContentLoaded', function() {

    new Carousel(document.querySelector('#carousel1'), {
        slidesToScroll: 3,
        slidesVisible: 3
    });

});