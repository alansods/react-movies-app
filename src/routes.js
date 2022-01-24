import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Favoritos from './pages/Favoritos';

import Header from './components/Header'

const Rotas = () => {
  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home />}>Home</Route>
      <Route exact path="/favoritos" element={<Favoritos />}>Favoritos</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Rotas;