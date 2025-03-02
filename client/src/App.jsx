// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <h1>Working</h1>
      <Link to="allorders">All Orders</Link>
      <Link to="allproducts">Menu</Link>
      <Routes>
        <Route path={"/allorders"} element={<h1>All Orders</h1>} />
        <Route path={"/allproducts"} element={<h1>Menu</h1>} />
        <Route
          path={"/allorders/:id"}
          element={<h1>Individual Restaurant</h1>}
        />
      </Routes>
    </main>
  );
}
