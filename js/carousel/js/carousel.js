// get the track component
const track = document.querySelector('.carousel__track');
// extract slides from the track (<li>) in an array
const slides = Array.from(track.children);
// left and right buttons
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
// navigation dots
const navDots = document.querySelector('.carousel__nav');
const dots = Array.from(navDots.children);
// store the width of the slide section using method getBoundingClientRect
const slideWidth = slides[0].getBoundingClientRect().width;

// arrange slides next to one another
// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';
// refactored below
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// modify CSS of slide on button click
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
// function to update highlighting of nav dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('carousel__indicator--current');
    targetDot.classList.add('carousel__indicator--current');
}
// function to hide arrow buttons if we reached the limit
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    // if we're all the way left hide the left arrow button
    if (targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    // if we're all the wat right hide the right arrow button
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    // if not display the buttons
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

// when I click left move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = navDots.querySelector('.carousel__indicator--current');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === previousSlide);
    // check if it's the last slide to the left
    if (previousSlide === null) {
        return;
    } else {
        moveToSlide(track, currentSlide, previousSlide);
        updateDots(currentDot, prevDot);
        hideShowArrows(slides, prevButton, nextButton, prevIndex);
    }
});
// when I click right move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = navDots.querySelector('.carousel__indicator--current');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    // check if it's the last slide to the right
    if (nextSlide === null) {
        return;
    } else {
        moveToSlide(track, currentSlide, nextSlide);
        updateDots(currentDot, nextDot);
        hideShowArrows(slides, prevButton, nextButton, nextIndex);
    }
});

// when I click the nav indicators, move to that slide
navDots.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;
    // slide that we're currently on
    const currentSlide = track.querySelector('.current-slide');
    // dot which is highlighted
    const currentDot = navDots.querySelector('.carousel__indicator--current');
    // get the index of the dot we clicked on
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    // use that index to define which slide to go to
    const targetSlide = slides[targetIndex];
    // call function to move to specific slide
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides, prevButton, nextButton, targetIndex);
});