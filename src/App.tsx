import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Mywork from "./components/Mywork/Mywork"
import Navbar from "./components/Navbar/Navbar"

function App() {

  return (
    <div className="flex justify-center">
      <Navbar/>
      <Hero/>
      <About/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
