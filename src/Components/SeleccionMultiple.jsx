import React, { Component } from "react";

export default class SeleccionMultiple extends Component {
  selectMultiple = React.createRef();
  state = {
    seleccionados: "",
  };
  recogerDatos = (event) => {
    //Si recuperamos value, solamente vendra el primer elemento, necesitamos recuperar las opciones
    let options = this.selectMultiple.current.options;
    let data = "";
    //esto simplemente contiene las opciones, debemos preguntar cuales estan seleccionadas
    for (var opt of options) {
      if (opt.selected === true) {
        data += opt.value + " ";
      }
    }
    this.setState({ seleccionados: data });
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <h1>Seleccion multiple de select</h1>
        <h3>{this.state.seleccionados}</h3>
        <form onClick={this.recogerDatos}>
          <label>Select multiple</label><br></br>
          <select size="6" multiple ref={this.selectMultiple}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
          <button>Enviar</button>
        </form>
      </div>
    );
  }
}
