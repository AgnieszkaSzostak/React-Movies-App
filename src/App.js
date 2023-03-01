import './App.css';
import React, {useState} from 'react';
import PageHome from './pages/PageHome/PageHome';
import PageMoviesSearch from './pages/PageMoviesSearch/PageMoviesSearch';
import { Routes, Route} from 'react-router-dom';
import { NavLink } from './components/NavLink/NavLink';
import { NavBar } from './components/NavBar/NavBar';
import { PageMoviesSearchResults } from './pages/PageMoviesSearchResults/PageMoviesSearchResults';

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('isUserLoggedIn') === "true")
 
  return (
    <div>
     { isUserLoggedIn 
     ? <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies/search">Movies search</NavLink>
      </NavBar>
      : null}
        <Routes>
          <Route path={"/"} element={<PageHome/>}></Route>
          <Route path={"/movies/search"} element={<PageMoviesSearch/>}>
            <Route path={":searchPhrase"} element={<PageMoviesSearchResults/>}></Route>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
