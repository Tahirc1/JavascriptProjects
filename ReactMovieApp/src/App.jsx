import { useEffect } from 'react';
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const movie = [{'title':'ang','rating':'5'},{'title':'ampp','rating':'7'}
  ,{'title':'ampx','rating':'2'},{'title':'xampp','rating':'4'}]
  const [movies, setMovies] = useState(movie);

  const getMovies = () =>{
    fetch(`${pop}${api_key}&language=en-US&page=1&include_adult=false`)
  .then((res) => res.json())
  .then((data) => {setMovies(data.results) })
  .catch(e => {console.log(e)})
  }

  useEffect( ()=>{
    getMovies()},
  [])

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submit")
  }

  const searchWord = (e)=>{
    let term = e.target.value;
    if(term != ''){
    fetch(`${searchQuery}${term}${api_key2}&language=en-US&page=1&include_adult=false`)
    .then((res) => res.json())
    .then((data) => {setMovies(data.results)});
    }
  }
  return (
    <div className='maincon'>
    <h1> Popular movies </h1>
    <form onSubmit={handleSubmit}>
    <input className='search' type="search" placeholder='..search' onChange={(e) =>{searchWord(e)}} />
    </form>
     <Cards data={movies}></Cards>
    </div>
  )
}
export default App
