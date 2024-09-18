import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from './pages/Login';
import { Register } from './pages/Register'
import { UsersListPage } from './pages/UsersListPage';
import { SinginPage } from './pages/SinginPage';
import { About } from './pages/About';
import { ServicesListing } from './pages/ServicesListing';
import { ShoppingChart } from './pages/ShoppingChart';
import { User } from './pages/User';
import { ServiceCreate } from './pages/ServiceCreate';
import "./index.css";
// import style from './App.css'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<ServicesListing />}></Route>
        <Route path='/service' element={<ServiceCreate />}></Route>
        <Route path='/userslist' element={<UsersListPage />}></Route>
        <Route path='/users' element={<User/>}></Route>
        <Route path='/chart' element={<ShoppingChart/>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/singin' element={<SinginPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}