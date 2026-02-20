import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Footer from './components/shared/Footer'
import Menu from './components/shared/Menu'
import Compras from './components/Compras'
import Ventas from './components/Ventas'
import Stock from './components/Stock'
import Ranking from './components/Ranking'
import Inicio from './components/Inicio'
import Login from './components/Login/Login'
import { ThemeProvider } from 'react-bootstrap'
function App() {

  return (
    <>
      <BrowserRouter>
      <Menu></Menu>
    <Routes>
      <Route path='/' element={<Inicio></Inicio>} ></Route>
      <Route path='/compras' element={<Compras></Compras>} ></Route>
      <Route path='/ventas' element={<Ventas></Ventas>} ></Route>
      <Route path='/stock' element={<Stock></Stock>} ></Route>
      <Route path='/ranking' element={<Ranking></Ranking>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
    </>
  )
}

export default App
