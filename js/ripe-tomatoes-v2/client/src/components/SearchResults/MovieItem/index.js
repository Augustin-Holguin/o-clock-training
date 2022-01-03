const MovieItem = ({ movie }) => {
    const { cover, title, year, synopsis, director, genres } = movie;

    return (
        <div className="movie">
            <img className="movie__image" src={cover} alt="movie cover" />
            <div className="movie__info">
                <h3 className="movie__info__title">{title}</h3>
                <div>
                    <p className="movie__info__meta">Genre: <a className="a-link" href={`genre/${genres[0].genre_name}`}>{genres[0].genre_name}</a></p>
                    <p className="movie__info__meta">Director: <a className="a-link" href="">{director.director_name}</a></p>
                    <p className="movie__info__meta">Year: {year}</p>
                </div>
                <div className="movie__info__syn">
                    {synopsis.split(" ").slice(0, 30).join(" ")}
                    <span> ... <a href={`movies/${title}`} className="a-link">Read more</a></span>
                </div>
            </div>
        </div>
    )
}

export default MovieItem;