import React from 'react';

export default function Wrapper({ children }){
  return (
    <div>
        I am the wrapper component
        <br />
        { children && `children: ${children}` }
        <br />
        { children && "children:" + children }
    </div>
  )
}