import React from 'react'

//Componentes basados en clases
class TarjetaFruta extends React.Component{
    state = {
      cantidad: 0
    }
    //Método agregar
    agregar=()=>this.setState({cantidad: this.state.cantidad +1})
    //Método Quitar
    quitar=()=>this.setState({cantidad: this.state.cantidad - 1})
    //Método limpiar
    limpiar=()=>this.setState({cantidad: 0})
    //Lleva un metodo render que retorna nuestros elementos
    render(){
        const hasItem = this.state.cantidad > 0
        const styles = {
            border: '1px solid black',
            marginBottom: '1em',
            borderRadius: '0.5em',
            padding: '1em',
            background: hasItem ? 'linear-gradient(45deg, black,#4A02F7)' : 'white',
            color: hasItem ? 'white' : 'black',
            transition: 'all 400ms ease-out'
        }
      return (
        <div style={styles}>
          <h3>{ this.props.name }</h3>
          <div>{this.state.cantidad}</div>
          <button 
            onClick={this.agregar}>
                +
              </button>
          <button onClick={this.quitar}>-</button>
          <button onClick={this.limpiar}>Limpiar</button>
          <hr/>
          <p>Precio: ${this.props.price}</p>
          <p>Total: ${this.props.price * this.state.cantidad}</p>
        </div>
      )
    }
  }
  //Exportamos para que se pueda usar fuera del archivo
  export default TarjetaFruta