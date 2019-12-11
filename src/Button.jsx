import React from 'react'
import PropTypes from 'prop-types'

export default function Button ({
    type, 
    to,
    value
}){
    if(type === 'anchor'){
        return <a href={to}>{value}</a>
    } else if(type === 'submit'){
        return <input type="submit" value={value} />
    } else {
        return <button>{value}</button>

    }
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'anchor', 'button']),
  to: function(props, propName, componentName){
    if(props.type === 'anchor'){
      if(!props[propName]){
        return new Error(
          'Invalid prop `' + propName + '` supplied to' +
          ' `' + componentName + '`. Validation failed.'
          );
      }
    }
  },
  value: PropTypes.string.isRequired
}

