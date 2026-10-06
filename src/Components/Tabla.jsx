import React, { Component } from "react";

export default class Tabla extends Component {
  //1.Caja de texto para pedir un numero
  //2. Enseñamos una tabla de multiplicar con el resultado de cada operacion
  state = {
    numeros: [],
  };
  numero = React.createRef();
  generarTabla = (event) => {
    let num = this.numero.current.value;
    let aux = [];
    console.log(num);
    event.preventDefault();
    for (let i = 1; i <= 10; i++) {
      let operacion = num + "*" + i;
      let resultado = num * i;
      let dato = {
        operacion: operacion,
        resultado: resultado,
      };
      aux.push(dato);
    }
    this.setState({
      numeros: aux,
    });
  };

  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarTabla}>
          <label>Introduce el numero</label>
          <br></br>
          <input type="number" ref={this.numero}></input>
          <button>Enviar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Operación</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            {this.state.numeros.map((fila, index) => {
              return (
                <tr key={index}>
                  <td>{fila.operacion}</td>
                  <td>{fila.resultado}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
