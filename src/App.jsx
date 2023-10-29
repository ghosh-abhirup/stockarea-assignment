import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailsScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/details/:id" element={<DetailScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
