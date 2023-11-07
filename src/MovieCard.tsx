

interface movieProp {
    movie: {
        Poster: string,
        Title: string,
        Type: string,
        Year: string,
        imdbID: string
    }
}

const MovieCard = ({movie}: movieProp) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>

      <div>
        <img 
        src={
            movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'
        } 
        alt={movie.Title} />
      </div>

      <div>
        <span>{movie.Type} </span>
        <h3>{movie.Title} </h3>
      </div>
    </div>
  );
};

export default MovieCard;
