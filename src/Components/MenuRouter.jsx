import React, { Component } from "react";

export default class MenuRouter extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/cine">Cine</a>
          </li>
          <li>
            <a href="/musica">Musica</a>
          </li>
          <li>
            <a href="/formulario">Recoger datos</a>
          </li>
          <li>
            <a href="/collatz">Conjetura de Collatz</a>
          </li>
          <li>
            <a href="/tabla">Tabla de multiplicar</a>
          </li>
          <li>
            <a href="/tabla2">Tabla de multiplicar mejorada</a>
          </li>
          <li>
            <a href="/seleccion">Seleccion multiple de select</a>
          </li>
        </ul>
      </div>
    );
  }
}
