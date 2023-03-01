import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageLogin = (props) => {
  const {
    className,
    onLoginClick,
    ...otherProps
  } = props

  return (
    <div 
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <button onClick={onLoginClick}>Click to log in</button>
      PageLogin
    </div>
  )
}

PageLogin.propTypes = {
  className: PropTypes.string,
  onLoginClick: PropTypes.func
}

export default PageLogin
