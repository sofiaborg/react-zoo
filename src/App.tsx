import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/Layout";
import { ParentPage } from "./components/pages/ParentPage";
import { AnimalDetails } from "./components/pages/AnimalDetails";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ParentPage />}></Route>
            <Route path="/:id" element={<AnimalDetails />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
