import React from "react"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
// import Preview from "./components/Preview"

function App() {

  return (
    <div className="main-wrapper">
      <Navbar />
      <div className="container">
        <Form />
        {/* <Preview /> */}
      </div>
      
    </div> 
  )
}

export default App
