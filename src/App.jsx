import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Homepage from './components/Homepage'
import Membersection from './components/membersection'
import NewsCard from './components/NewsCard'
import SubscribeSection from './components/SubscribeSection'
import Footer from './components/Footer'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route> 
      </Routes>
    </>
  )
}

export default App
