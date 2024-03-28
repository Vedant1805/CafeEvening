
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home/Home"
import { Menu } from "./components/Menu/Menu"
import { About } from "./components/About/About"
import { Gallery } from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
