import './App.css'
import { useState , useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import {Routes , Route} from "react-router-dom"
import { Link } from "react-router-dom";

function RandomQPage(){
    const [data, setData] = useState({});
  useEffect(()=> {fetch('http://localhost:4000/random')
  .then((response) => response.json())
  .then((data) => setData({...data})) },[])
  console.log(data)
    return(
        <div className="App">
        <header className="App-header">
        <h1>{data.quoteText}</h1>
        <p>{data.quoteAuthor}</p>
        <p>
         <Link to={`/`}>Go Home</Link>
        </p>
        </header>
       
        </div>
    )
}

export default RandomQPage