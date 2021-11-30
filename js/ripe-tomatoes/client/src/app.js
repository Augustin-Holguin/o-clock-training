const app = {
    base_url: 'http://localhost:3000',
    init: function() {
        genreModule.makeGenreNav();
    }
}

document.addEventListener('DOMContentLoaded', app.init);