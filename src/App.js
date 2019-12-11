import './style.css'
import React from 'react';

function App(){
  return (
    <>
      <div style={{
        backgroundColor: 'red',
        color: 'white'
      }}>
        This is a React box 1
      </div>
      <div className="boxy">
        This is a React box 2
      </div>
      <div className="boxy2">
        This is a React box 3
      </div>
    </>
  )
}

export { App }