import './App.css';
import React, {useCallback, useState, useEffect} from 'react';
import PageHome from './pages/PageHome/PageHome';
import PageMoviesSearch from './pages/PageMoviesSearch/PageMoviesSearch';
import { Routes, Route} from 'react-router-dom';
import { NavLink } from './components/NavLink/NavLink';
import { NavBar } from './components/NavBar/NavBar';
import { PageMoviesSearchResults } from './pages/PageMoviesSearchResults/PageMoviesSearchResults';
import PageLogin from './pages/PageLogin/PageLogin';
import PageLogOut from './pages/PageLogOut/PageLogOut';

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(localStorage.getItem('isUserLoggedIn') === "true")
  const logIn = useCallback(() => {
    setUserLoggedIn(true)
  }, [])
  const logOut = useCallback(() => {
    setUserLoggedIn(false)
  }, [])
  useEffect(() => {
    isUserLoggedIn === true
    ? localStorage.setItem('isUserLoggedIn', "true")
    : localStorage.removeItem('isUserLoggedIn')
  }, [isUserLoggedIn])
  return (
    <div>
     { isUserLoggedIn 
     ? <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies/search">Movies search</NavLink>
        <NavLink to="/logout">LogOut</NavLink>
      </NavBar>
      : null}
        <Routes>
          <Route path="/logout" element={<PageLogOut onLogOut={logOut}/>}></Route>
          {!isUserLoggedIn
          ?<Route path={"/"} element={<PageLogin onLoginClick={logIn}/>}></Route>
          : <>
            <Route path={"/"} element={<PageHome/>}></Route>
              <Route path={"/movies/search"} element={<PageMoviesSearch/>}>
                <Route path={":searchPhrase"} element={<PageMoviesSearchResults/>}></Route>
              </Route>
          </>
          }
        </Routes>
    </div>
  );
}

export default App;
