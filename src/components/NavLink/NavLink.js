import React from 'react'
import PropTypes from 'prop-types'
import { NavLink as RouterNavLink } from 'react-router-dom'
import classes from './styles.module.css'

export const NavLink = (props) => {
  const {
    className,
    to, 
    children, 
    ...otherProps
  } = props

  return (
    <li
      className={`${classes.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <RouterNavLink 
              to={to}
              style={({isActive}) => ({
                fontWeight: isActive ? 700 : 400
              })}>
              {children}
        </RouterNavLink>
    </li>
  )
}

NavLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default NavLink
