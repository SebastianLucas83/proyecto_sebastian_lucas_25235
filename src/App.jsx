import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import Home from './components/Home';
import UltimosIngresos from './components/Ultimos Ingresos';
import Infaltables from './components/Infaltables';
import Login from './components/Login'; 
import Dashboard from './components/Dashboard';
import Footer from './components/Footer'
import { CartProvider } from './components/CartContext';
import Carrito from './components/Carrito'; 

//import CrudProductos from './components/CrudProductos';
function App() {

  return (
    <AuthProvider>
      <CartProvider>
     <Router>
      <Header />
      <Routes>
        <Route path="/administracion" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/UltimosIngresos" element={<UltimosIngresos />} />
        <Route path="/infaltables" element={<Infaltables />} />
       <Route path="/carrito" element={<Carrito />} />
      </Routes>
      <Footer/>
    </Router>
    </CartProvider>
     </AuthProvider>
  )
}

export default App
