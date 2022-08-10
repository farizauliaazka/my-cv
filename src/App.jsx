import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'


const App = () => {
  const [nama, setNama] = useState ("")
  const [halo, setHalo] = useState ("😎WELCOME🥳")
  const [job, setJob] = useState ("")

const datas = {
  nama, setNama, job, setJob, halo, setHalo
}

  return (        
        <Router>
        <>
          <Nav />  
          <Routes>                   
            <Route path='/' exact element={<Header datas= {datas} />}/>
            <Route path='/about' exact element={<About />}/>
            <Route path='/experience' exact element={<Experience />}/>
            <Route path='/portfolio' exact element={<Portfolio />}/>
            <Route path='/contact' exact element={<Contact />}/> 
            
          </Routes>                
          <Footer />
        </>  
        </Router>
  )
}

export default App