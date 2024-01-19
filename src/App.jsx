import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Main from './components/Main'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Contact2 from './components/Contact2'
import NavbarNoCart from './components/NavbarNoCart'

function App() {
  

  return (
    <div className='bg-black'>
      <NavbarNoCart />
      <Main />
      <Menu />
      <Contact2 />
      <Footer />
    </div>
  )
}

export default App
