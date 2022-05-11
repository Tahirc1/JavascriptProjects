import { useEffect, useState } from 'react'
const API_URL = 'http://api.icndb.com/jokes/random'
import './App.css'

function App() {
  const [jokes,setJoke] = useState();

  const generateJoke = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke))

  }
  useEffect(()=>{
    generateJoke();
  },[])
  return (
    <div className="container">
     <h1> Chuck norris jokes</h1>
     <p> {jokes}</p>
     <button onClick={generateJoke}>new joke</button>
    </div>
  )
}

export default App
