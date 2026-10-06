import React, { Component } from "react";

export default class Tabla extends Component {
  //1.Caja de texto para pedir un numero
  //2. Enseñamos una tabla de multiplicar con el resultado de cada operacion
  state = {
    numeros: [],
    random: [],
  };
  numero = React.createRef();
  numerosAleatorios = () => {
    let aux = [];
    for (let i = 0; i <= 10; i++) {
      let num = parseInt(Math.random() * 150) + 1;
      aux.push(num);
    }
    this.setState({
      random: aux,
    });
  };
  generarTabla = (event) => {
    let num = this.numero.current.value;
    let aux = [];
    console.log(num);
    event.preventDefault();
    for (let i = 0; i <= 10; i++) {
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

  componentDidMount = () => {
    this.numerosAleatorios();
  };
  render() {
    return (
      <div>
        <h1>Tabla de multiplicar</h1>
        <form onSubmit={this.generarTabla}>
          <label>Calculadora de numeros aleatorios</label>
          <br></br>
          {this.state.random.length !== 0 ? (
            <select ref={this.numero}>
              {this.state.random.map((num, index) => {
                return <option key={index}>{num}</option>;
              })}
            </select>
          ) : (
            ""
          )}
          {this.state.random.length !== 0 ? <button>Enviar</button> : ""}
        </form>
        <br></br>
        <button onClick={this.numerosAleatorios}>Generar Numeros random</button>
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
