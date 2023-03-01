import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { Navigate } from 'react-router'
import { useUser } from '../../contexts/userContext'

export const PageLogOut = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const {logOut} = useUser()
  useEffect(() => {
    logOut()
  },[])
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Navigate to={"/"}/>
    </div>
  )
}

PageLogOut.propTypes = {
  className: PropTypes.string,

}

export default PageLogOut
