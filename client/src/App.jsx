import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { LocationListing } from './pages/LocationListing';
import { Login } from './pages/Login';
import { Register } from './pages/Register'
import { UsersListPage } from './pages/UsersListPage';
import { SinginPage } from './pages/SinginPage';
import { About } from './pages/About';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/locations' element={<LocationListing />}></Route>
        <Route path='/userslist' element={<UsersListPage />}></Route>
        <Route path='/user' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/singin' element={<SinginPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}