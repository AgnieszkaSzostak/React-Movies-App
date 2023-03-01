import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import classes from './styles.module.css'

export const PageMoviesSearchResults = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const {searchPhrase} = useParams()
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageMoviesSearchResults || search phrase is {searchPhrase}
    </div>
  )
}

PageMoviesSearchResults.propTypes = {
  className: PropTypes.string
}

export default PageMoviesSearchResults
