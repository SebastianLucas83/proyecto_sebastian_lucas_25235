import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import UltimosIngresos from './components/Ultimos Ingresos';
import Infaltables from './components/Infaltables';
import Login from './components/Login'; 
import Footer from './components/Footer'

function App() {

  return (
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/UltimosIngresos" element={<UltimosIngresos />} />
        <Route path="/infaltables" element={<Infaltables />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
