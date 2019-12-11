import React from 'react';
import Box from './Box';

export default function List({data}){
  return(
      <div>
        { data.map(({name}, index) => <Box id={index} key={index}>{name}</Box> )}
      </div>
  )
}
