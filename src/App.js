import './App.css';
import PageHome from './pages/PageHome/PageHome';
import PageMoviesSearch from './pages/PageMoviesSearch/PageMoviesSearch';
import { Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies/search">Movies search</Link>
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
