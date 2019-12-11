import React from 'react'

export default function Box({ id, children, key }){
  // `key` is NOT accessible to you as a developer.
  // Its meant for internal workings of React's shadow DOM
  console.log(key)
  return (
    <div id={id} style={{
      border: '2px solid green',
      padding: '10px'
    }}>
        {children}
    </div>
  )
}