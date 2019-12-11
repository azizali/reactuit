import React from 'react';
import Wrapper from './Wrapper'
import Greeting from './Greeting'
// Just a function that return a user interface
// Component name should be Capitalized
// User interface HTML
// Import React library
// Always ONE parent element
function App(){
  // If you want to render based on multiple conditions
  function shouldRender (isLoading, hasData){
    return true || false
  }
  const isLoading = true
  const name = "Intuit Team"
  return (
    <> 
      {shouldRender() && <div>Loading...</div>}
      <div>Hello world, some more text, Test again</div>
      <hr />
      {!shouldRender() && <Wrapper />}
      <br/>
      {!shouldRender() && <Wrapper>
        information, data
      </Wrapper>}
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
    </>
  )
}
// Default export
// export default App

// // Named export
export { App }