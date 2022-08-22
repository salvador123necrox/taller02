
import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [celsius, setCelsius] = useState(0);
  const [fahren, setFahren] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCelsius((total * tipo) / 1);
    setFahren((total * 9/5)+32);
    setKelvin((total*tipo)+273.15);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };

  return (
    <div className="App">
      <h1>Convertidor de temperaturas 7u7r</h1>

      <p>Grados Celsius: {celsius}</p>
      <p>Grados Fahrenheit: {fahren}</p>
      <p>Grados Kelvin: {kelvin}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Celsius</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;