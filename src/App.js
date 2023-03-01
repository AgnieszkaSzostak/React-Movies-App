import './App.css';
import PageHome from './pages/PageHome/PageHome';
import PageMoviesSearch from './pages/PageMoviesSearch/PageMoviesSearch';
import { Routes, Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies/search">Movies search</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path={"/"} element={<PageHome/>}></Route>
        <Route path={"/movies/search"} element={<PageMoviesSearch/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
