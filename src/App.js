import { useState, useEffect } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { favAdd } from "./actions/action";
import { movies } from "./movies";

function App() {
  const [sira, setSira] = useState(0);
  const favMovies = useSelector((store) => store.favMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("favMovies", JSON.stringify(favMovies));
  }, [favMovies]);

  const handleAdd = () => {
    dispatch(favAdd(movies[sira]));
    sira < movies.length - 1 && setSira(sira + 1);
  };

  const basaDon = () => {
    setSira(0);
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={sira} setSira={setSira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={basaDon}
              className="px-2 py-1 rounded-md border border-green-400 hover:bg-green-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Başa Dön
            </button>
            <button
              onClick={handleAdd}
              className="px-2 py-1 rounded-md border border-blue-400 hover:bg-blue-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
