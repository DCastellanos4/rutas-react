import React, { Component } from "react";

export default class Collatz extends Component {
  //CONJETURA DE COLLATZ
  //TODO NUMERO NATURAL SIEMPRE LLEGA A 1 SIGUIENDO 2 PATRONES
  //1. Si el numero es par, se divide entre 2
  //2. Si el numero es impar, se multiplica por 3 y se suma 1
  state = {
    numeros: [],
  };
  numero = React.createRef();
  recojeDatos = (event) => {
    let numero = parseInt(this.numero.current.value);
    let aux = [];
    console.log(numero);
    do {
      if (numero % 2 === 0) {
        numero = numero / 2;
        aux.push(numero);
      } else {
        numero = numero * 3 + 1;
        aux.push(numero);
      }
    } while (numero !== 1);
    this.setState({
      numeros: aux,
    });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Conjetura de Collatz</h1>
        <form onSubmit={this.recojeDatos}>
          <label>Introduce el numero</label>
          <input type="number" ref={this.numero}></input>
          <button>Enviar</button>
        </form>
        {this.state.numeros.map((num, index) => {
          return <li key={index}>{num}</li>;
        })}
      </div>
    );
  }
}
