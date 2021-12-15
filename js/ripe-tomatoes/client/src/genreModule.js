const genreModule = {
    base_url: 'http://localhost:3000/genres',
    // method to get all disctinct genres from db
    getAllGenres: async function() {
        try {
            const result = await fetch(`${this.base_url}`);
            const genres = await result.json();
            return genres;
        } catch (error) {
            console.error(error);
        }
    },
    // method to make genre nav in DOM
    makeGenreNav: async function() {
        const genreList = document.getElementById('movie-genre__list');
        const genres = await this.getAllGenres();  

        for (const genre of genres) {
            const li = document.createElement('li');
            li.classList.add('list__genre');
            
            const a = document.createElement('a');
            a.setAttribute('href', `/genres/${genre.genre_name}`);
            a.textContent = genre.genre_name;

            li.appendChild(a);
            genreList.appendChild(li);
            // only add vertical separator if not the last genre
            if (genres.indexOf(genre) < genres.length - 1) {
                const span = document.createElement('span');
                span.classList.add('genre-separator');
                genreList.appendChild(span);
            }
        }
    },
    makeGenrePage: function() {
        
    }
}