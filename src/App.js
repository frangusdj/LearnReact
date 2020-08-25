import React from 'react'
import TarjetaFruta from './componentes/TarjetaFruta'

//Arow funcion
//<!--llamamos a la funcion como una etiqueta-->
const App = () => (
    <div>
      <TarjetaFruta name= 'Sandia' price = {2.00}/>
      <TarjetaFruta name= 'Fresa' price = {3.56}/>
      <TarjetaFruta name= 'Naranja' price = {1.75}/>
    </div>
  ) // solo lo hemos declarado

  //Exportamos por defecto la constante App
  export default App