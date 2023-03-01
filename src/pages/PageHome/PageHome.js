import React from 'react'
import PropTypes from 'prop-types'

import classes from './styles.module.css'

export const PageHome = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageHome
    </div>
  )
}

PageHome.propTypes = {
  className: PropTypes.string
}

export default PageHome
