import { movies } from "./../movies";

export default function Movie({ sira, setSira }) {
  const movie = movies[sira];

  function sonrakiFilm() {
    sira < movies.length - 1 && setSira(sira + 1);
  }

  const oncekiFilm = () => {
    sira > 0 && setSira(sira - 1);
  };

  return (
    <div className="relative max-w-6xl mx-auto p-4 bg-white rounded-lg shadow-lg transition-all duration-200 ease-in-out transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800">{movie.title}</h2>
        <div className="flex items-center">
          {sira !== 0 && (
            <button
              onClick={oncekiFilm}
              className="px-2 py-1 rounded-md border border-gray-400 hover:bg-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Önceki
            </button>
          )}
          {sira !== movies.length - 1 && (
            <button
              onClick={sonrakiFilm}
              className="px-2 py-1 ml-2 rounded-md border border-gray-400 hover:bg-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Sonraki
            </button>
          )}
        </div>
      </div>
      <div className="flex">
        <img src={movie.posterUrl} alt={movie.title} className="w-1/3" />
        <div className="px-4 w-2/3">
          <p className="text-sm font-medium text-gray-600 mb-2">
            {movie.genres.join(", ")}
          </p>
          <p className="text-sm text-gray-800">{movie.plot}</p>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 mb-1">Director:</p>
            <p className="text-sm text-gray-800">{movie.director}</p>
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-gray-600 mb-1">Actors:</p>
            <p className="text-sm text-gray-800">{movie.actors}</p>
          </div>
          <div className="mt-4">
            <span className="px-2 py-1 bg-gray-200 rounded-md text-sm text-gray-600">
              {movie.year}
            </span>
            <span className="px-2 py-1 ml-2 bg-gray-200 rounded-md text-sm text-gray-600">
              {movie.runtime} minutes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
