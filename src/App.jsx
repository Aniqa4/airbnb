import { useState } from "react"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"

function App() {
  const [searchedItems,setSearchedItems]=useState([])

  const handleSearch=()=>{
    
  }

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
