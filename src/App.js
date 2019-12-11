import React from 'react';
import Wrapper from './Wrapper'
import Greeting from './Greeting'
// Just a function that return a user interface
// Component name should be Capitalized
// User interface HTML
// Import React library
// Always ONE parent element
function App(){
  const name = "Intuit Team"
  return (
    <div>
      <div>Hello world, some more text, Test again</div>
      <hr />
      <Wrapper></Wrapper>
      <hr />
      <Greeting
        personName={name}
        personAge={12}
        doSomething={()=>{
          // alert('hello')
          return <div>Did something</div>
        }}
        locations={['Chicago', 'San Diego', 'NYC']}
        options={{
          employeeCount: 1000,
          numberOfCustomers: Infinity
        }}
      />
    </div>
  )
}
// Default export
// export default App

// // Named export
export { App }