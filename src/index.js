import React from 'react'//Importamos la libreria de react
import ReactDOM from 'react-dom'//Importamos el react dom

const name = 'Franklin Mendoza'
const user1 = {
  name: 'Franklin Mendoza',
  age: 28,
  country: 'Ecuador'
}
function getInfo(){
  return `Hola mi nombre es: ${user1.name} y soy originario ${user1.country}`
}
// como se puede hacer una funcion
const TarjetaFruta = (props) => (
  <div>
    <h3>{ props.name }</h3>
    <hr/>
<p>Precio: ${props.price}</p>
  </div>
)
//Arow funcion
//<!--llamamos a la funcion como una etiqueta-->
const App = () => (
  <div>
    <TarjetaFruta name= 'Sandia' price = {2.00}/>
    <TarjetaFruta name= 'Fresa' price = {3.56}/>
    <TarjetaFruta name= 'Naranja' price = {1.75}/>
  </div>
) // solo lo hemos declarado
//const root = document.getElementById('root')//apuntamos hacia el elemento que esta en la carpeta public en el documento index.html -> 'root'
//mostramos en el react DOM atraves de su metodo render
//recibe como parametros el elemento que va a montar y como segundo parametro donde lo va a montar
//ReactDOM.render(app,root)
//Otra forma de hacerlo es de la siguiente forma, por que el root solo se usa una sola vez
ReactDOM.render(<App />,document.getElementById('root'))