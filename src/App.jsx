import './App.css'
import Card from './Components/Card'
import Carrusel from './Components/Carrusel'
import Company from './Components/Company'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <div>
        <Nav/>
        <Carrusel/>
        <Company/>
        <Contact/>
        <Card/>
        <Footer />
      </div>
    </>
  )
}

export default App
