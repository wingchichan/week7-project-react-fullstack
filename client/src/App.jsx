// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Form from "./Form";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";

export default function App() {
  return (
    <main>
      <h1>Brunch House</h1>
      <Form />
      <Link to="orders">All Orders</Link>
      <Link to="products">Menu</Link>
      <Menu />
      <Routes>
        <Route path={"/orders"} element={<h2>All Orders</h2>} />
        <Route path={"/products"} element={<h2>Menu</h2>} />
        <Route path={"/orders/:id"} element={<h1>Individual Order</h1>} />
      </Routes>
    </main>
  );
}
