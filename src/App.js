import './style.css'
import React from 'react';
import List from './List'
import { data } from './listData';

function App(){
  return (
    <>
      <List data={data}/>
    </>
  )
}

export { App }