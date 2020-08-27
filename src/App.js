import React, {Component} from 'react'

const styles = {
  heigth: '200px',
  width: '200px',
  background: 'gold',
  padding:'1em',
  boxSizing: 'border-box'
}

class App extends Component{
  state = {
    x: 0,
    y: 0
  }
  manejador = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }
  render(){
    return(
      <div style = {styles}
      onMouseMove = {this.manejador}>
        <div>
          x: {this.state.x}
          y: {this.state.y}
        </div>
      </div>
    )
  }
}
  export default App