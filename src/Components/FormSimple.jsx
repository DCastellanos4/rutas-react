import React, { Component } from "react";

export default class FormSimple extends Component {
  //VARIABLE DE REFERENCIA AL INPUT QUE PINTAMOS ABAJO
  state = {
    nombre: null,
  };
  cajaNombre = React.createRef();
  enviarDatos = (event) => {
    event.preventDefault();
    let nombre = this.cajaNombre.current.value;
    this.setState({
      nombre: nombre,
    });
    console.log("DATOS ENVIADOS: " + nombre);
  };

  render() {
    return (
      <div>
        <h1>Form simple</h1>
        {this.state.nombre && <h2>Nombre: {this.state.nombre}</h2>}
        <form onSubmit={this.enviarDatos}>
          <label>Introduce tu nombre</label>
          <br></br>
          <input type="text" ref={this.cajaNombre}></input>
          <br></br>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
