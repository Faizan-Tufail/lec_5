// import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './CSS/loader.css';


// Layouts Routes

import Navigation from "./layouts/Navigation"


// Screen  Routes

import Home from './screens/Home'
import Login from './screens/Login'
import ContactUs from './screens/ContactUs'
import Products from './screens/Products'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

     <Router> 

    <Navigation/>


       <div className='my-1 ' >

        <h1 className='text-4xl text-amber-600 text-center p-4 bg-slate-300 '>Alien Codes👾</h1>
      </div>

      <Routes>
        
        <Route path= '/' element = {<Home/>} />
        <Route path= '/contactus' element = {<ContactUs/>} />
        <Route path= '/login' element = {<Login/>} />
        <Route path= '/products' element = {<Products/>} />

      </Routes>

    </Router> 

      
    </>
  )
}

export default App
