import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Home'
import Footer from './Footer'
import DashboardSql from './components/DashboardSql'
import DashboardApi from './components/DashboardApi'
import DasboardArchivo from './components/DasboardArchivo'
import Menu from './components/shared/Menu'
import Compras from './components/Compras'
import Ventas from './components/Ventas'
import Stock from './components/Stock'
import Ranking from './components/Ranking'
import Prueba from './components/Prueba'
function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/compras' element={<Compras></Compras>} ></Route>
      <Route path='/ventas' element={<Ventas></Ventas>} ></Route>
      <Route path='/stock' element={<Stock></Stock>} ></Route>
      <Route path='/ranking' element={<Ranking></Ranking>} ></Route>
      <Route path='/dashboardSql' element={<DashboardSql></DashboardSql>} />
      <Route path='/dashboardApi' element={<DashboardApi></DashboardApi>} />
      <Route path='/dashboardArchivo' element={<DasboardArchivo></DasboardArchivo>} />
      <Route path='/prueba' element={<Prueba></Prueba>} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
