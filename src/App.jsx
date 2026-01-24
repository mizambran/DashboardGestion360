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
function App() {

  return (
    <>
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/compras' element={<Compras></Compras>} ></Route>
      <Route path='/dashboardSql' element={<DashboardSql></DashboardSql>} />
      <Route path='/dashboardApi' element={<DashboardApi></DashboardApi>} />
      <Route path='/dashboardArchivo' element={<DasboardArchivo></DasboardArchivo>} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
