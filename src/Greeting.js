import React from 'react';

// const user = {
//   name: 'Person A',
//   hobbies: ['x', 'y', 'z'],
//   skills: ['x', 'y', 'z']
// }

// //
// const name = user.name
// const hobbies = user.hobbies
// const skills = user.skills

// // 
// const { name, hobbies, skills } = user

export default function Greeting({
  doSomething,
  personName,
  personAge,
  options,
  locations
}){
  return (
    <div>
      {doSomething()}
      Hello {personName},
      you are {personAge} years old
      <br />
      Employee Count: {options.employeeCount}
      <br />
      numberOfCustomers: {JSON.stringify(options)}
      <br/>
      Locations: {locations}
      <pre>
        {JSON.stringify(options, null, 4)}
      </pre>

      { options.employeeCount / personAge}
    </div>
  )
}