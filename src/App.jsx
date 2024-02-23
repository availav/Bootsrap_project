// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as BrowserRouter} from 'react-router-dom';


import Home from './pages/home/Home';
import About from './pages/about/About';
import Whyus from './pages/whyus/Whyus';



// import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"


function App() {
  
  
  return (
    
    <BrowserRouter>
    
      {/* <Routes>
        
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />

      </Routes> */}
   
    <Home/>
    <About/>
    <Whyus/>

    
    
    

    </BrowserRouter>
   
    
  )
}

export default App
