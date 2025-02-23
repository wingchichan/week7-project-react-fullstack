// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <h1>Working</h1>
      <Routes>
        <Route path={"/allrestaurants"} element={<h1>Home Page</h1>} />
        <Route
          path={"allrestaurants/:id"}
          element={<h1>Individual Restaurant</h1>}
        />
      </Routes>
    </main>
  );
}
