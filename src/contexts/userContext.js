import React, {useState, useCallback, useEffect, useContext} from "react"
import { PropTypes } from 'prop-types';


export const UserContext  = React.createContext()
export const useUser = () => {
   return useContext(UserContext)
}
const UserContextProvider = (props) => {
    const {children} = props;
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
    <UserContext.Provider value={{isUserLoggedIn, logIn, logOut}}>
        {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
    children: PropTypes.node

}

export default UserContextProvider