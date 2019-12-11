import './style.css'
import React from 'react';
import Button from './Button'

function App(){
  return (
    <>
      <Button value="Traditional Button" />
      <Button type="anchor" to="https://google.com" value="Anchor link" />
      <Button type="submit" value="Submit button" />
    </>
  )
}

export { App }