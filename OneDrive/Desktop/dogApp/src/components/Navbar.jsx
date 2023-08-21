import { useState, useEffect } from "react"
import './navbar.css'
import Card from "./Card";

function Navbar() {
    const [razas, setRazas] = useState([]);
    const [razaSeleccionada, setRazaSeleccionada] = useState('');
    const [isVisisble, setIsVisisble] = useState(false)

    useEffect(() => {
        // Llamada a la API para obtener la lista de razas
        fetch('https://dog.ceo/api/breeds/list/all')
          .then(response => {
            if (!response.ok) {
              throw new Error('La solicitud no fue exitosa');
            }
            return response.json();
          })
          .then(data => {
            const razasArray = Object.keys(data.message);
            setRazas(razasArray);
          })
          .catch(error => console.error('Error fetching data:', error));
      }, []);
    
      const handleSelectChange = event => {
        setRazaSeleccionada(event.target.value);
        setIsVisisble(true)
      };
      console.log(razaSeleccionada)
      
  return (
    <>
         <div className="navbar">
      <h1>Listado de Razas de Perros</h1>
      <select className="select" value={razaSeleccionada} onChange={handleSelectChange}>
        <option value="">Seleccione una raza</option>
        {razas.map(raza => (
          <option key={raza} value={raza}>
            {raza}
          </option>
        ))}
      </select>
    </div>
        <Card raza={razaSeleccionada} isVisible={isVisisble}/>
    </>
  )
}

export default Navbar