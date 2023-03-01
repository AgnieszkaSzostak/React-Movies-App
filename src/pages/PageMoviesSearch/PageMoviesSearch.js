import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDebounce } from 'react-use';
import classes from './styles.module.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom';

export const PageMoviesSearch = (props) => {
  const {
    className,
    ...otherProps
  } = props
  const {searchPhrase} = useParams()
  const navigate = useNavigate();
  const [tmpSearchPhrase, setTmpSearchPhrase] = useState()
  const [,cancel] = useDebounce(() => {
    if(searchPhrase !== tmpSearchPhrase){
      navigate(tmpSearchPhrase)
    }
  }, 1000, [tmpSearchPhrase])
  useEffect(() => {
    return () => cancel()
  },[cancel])
  return (
    <div
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      PageMoviesSearch
      <input value={tmpSearchPhrase || ''} onChange={(e) => setTmpSearchPhrase(e.target.value.replaceAll('/', ''))}></input>
      <Outlet/>
    </div>
  )
}

PageMoviesSearch.propTypes = {
  className: PropTypes.string
}

export default PageMoviesSearch
