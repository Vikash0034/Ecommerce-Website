import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Index from './Components/Home'
import Navbar from './Pages/Navbar'
import Shop from './Components/Shop'
import Blog from './Components/Blog'
import About from './Components/About'
import Contact from './Components/Contact'
import Cart from './Components/Cart'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Index/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/blog' element={<Blog/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
