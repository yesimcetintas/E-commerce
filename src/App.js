
import './App.css';

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar"
import Footer from "./components/Footer/Footer"
import SingleProduct from "./pages/SingleProductPage/SingleProductPage";
import Cart from "./pages/CartPage/CartPage";
import Error from "./pages/ErrorPage/ErrorPage";
import Products from "./pages/ProductsPage/ProductsPage";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Navbar />
         
          <Sidebar />
          <Routes>
            <Route path="/" element={<Products></Products>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/products/:id" element={<SingleProduct></SingleProduct>}></Route>
            <Route path="/*" element={<Error></Error>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
     
    </div>
  );
}

export default App;
