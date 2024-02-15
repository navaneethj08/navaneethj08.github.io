import {createContext, useState, React} from 'react'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import About from './Components/Abouts/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


export const ThemeContext = createContext("null");

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    <div className="App" id="theme">
    <Navbar />
    <HeroSection />
    <About/>
    <Skills/>

    <Contact/>
    <Footer/>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
