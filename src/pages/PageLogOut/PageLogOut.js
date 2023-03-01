import React, {useEffect} from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { Navigate } from 'react-router'

export const PageLogOut = (props) => {
  const {
    className,
    onLogOut,
    ...otherProps
  } = props

  useEffect(() => {
    onLogOut()
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
  onLogOut: PropTypes.func
}

export default PageLogOut
