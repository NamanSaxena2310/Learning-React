import React from 'react'
import PropTypes from 'prop-types'
import className from 'classnames'
import { twMerge } from 'tailwind-merge';


function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {

 
  const classes = twMerge(className(rest.className,'px-3 py-1.5 border flex items-center',{
    'border-blue-600 bg-blue-500 text-white' : primary,
    'border-gray-900 bg-gray-500 text-white' : secondary,
    'border-green-500 bg-green-500 text-white' : success,
    'border-yellow-400 bg-yellow-400 text-white' : warning,
    'border-red-500 bg-red-500 text-white' : danger,
    'rounded-full': rounded,
    'bg-white' : outline,
    'text-blue-500': outline && primary,
    'text-gray-500': outline && secondary,
    'text-green-500': outline && success,
    'text-yellow-500': outline && warning,
    'text-red-500': outline && danger,

})) 

  return (
    <button {...rest} className={classes}>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue : 
  (
    primary,
    secondary,
    success,
    warning,
    danger,)=>{
      const count = Number(!!primary)
      + Number(!!secondary)
      + Number(!!warning)
      + Number(!!success)
      + Number(!!danger)

      if (count > 1) {
        throw new Error('Only one of primary,secondary,warning and danger could be used')
      }
  }
}

export default Button
