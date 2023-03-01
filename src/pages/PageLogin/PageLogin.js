import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'
import { useUser } from '../../contexts/userContext'

export const PageLogin = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const { logIn } = useUser()
  return (
    <div 
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <button onClick={logIn}>Click to log in</button>
      PageLogin
    </div>
  )
}

PageLogin.propTypes = {
  className: PropTypes.string,
}

export default PageLogin
