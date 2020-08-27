import React, {Component} from 'react'
//import TarjetaFruta from './componentes/TarjetaFruta'

class Contador extends Component{
  state = {
    video: {
      title: 'Super Video',
      likes: 0
    }
  }
  add = () => {
    this.setState((state) => ({
      video: {
        ...state.video,
        likes: state.video.likes + 1
      }
    }))
  }
  render(){
    return(
      <div>
        <h1>
        {this.state.video.title}
      </h1>
      <button onClick = {this.add}>
        Likes: ({this.state.video.likes})
      </button>
      </div>
    )
  }
}
//Arow funcion
//<!--llamamos a la funcion como una etiqueta-->
const App = () => (
    <div>
      <Contador />
    </div>
  ) // solo lo hemos declarado

  //Exportamos por defecto la constante App
  export default App