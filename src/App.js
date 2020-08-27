import React, {Component} from 'react'

const Gato = (props) => (
  <div>
    <h1>Gato </h1>
    <pre>
      {JSON.stringify(props,null,4)}
    </pre>
  </div>
)
//Usando un spread combianmos otros datos con las props
class App extends Component{
  render(){
    const otrosDatos = {
      raza: 'tropical',
      peleasNocturnas: 300
    }
    return(
      <div>
          <Gato 
            name = 'Garfield'
            age = '2 años'
            {...otrosDatos}
          />
      </div>
    )
  }
}
  export default App