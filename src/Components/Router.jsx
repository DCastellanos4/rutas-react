import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Musica from "./Musica";
import Cine from "./Cine";
import FormSimple from "./FormSimple";
import Collatz from "./Collatz";
import Tabla from "./Tabla";
import TablaV2 from "./TablaV2";
import SeleccionMultiple from "./SeleccionMultiple";
export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cine" element={<Cine />}></Route>
          <Route path="/musica" element={<Musica />}></Route>
          <Route path="/formulario" element={<FormSimple />}></Route>
          <Route path="/collatz" element={<Collatz />}></Route>
          <Route path="/tabla" element={<Tabla />}></Route>
          <Route path="/tabla2" element={<TablaV2 />}></Route>
          <Route path="/seleccion" element={<SeleccionMultiple />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
