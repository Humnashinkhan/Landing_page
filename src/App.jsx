import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Career from "./components/Career/Career.jsx";
import Resources from "./components/Resources/Resources.jsx";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <Navbar/> 
      <div className="Sections">
        <Home/>
        <Contact/>
        <Career/>
        <Resources/>
      </div>
    </div>
  )
}

export default App
