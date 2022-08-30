import { useState , useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import {Routes , Route} from "react-router-dom"
import { Link } from "react-router-dom";

function Home(){
    const [count, setCount] = useState(0)
  const [data, setData] = useState([{}]);
  useEffect(()=> {fetch('http://localhost:4000/quotes')
  .then((response) => response.json())
  .then((data) => setData([...data])) },[])
  console.log(data)
 
  let randomQuote = data[Math.floor(Math.random() * data.length)]
console.log(randomQuote)
  
    return(
        <div className="App">
        <header className="App-header">
        <p>
         <Link to={`/random`}>Random Quote</Link>
        </p>
        <ul>
      {
        data.map((date,index) => 
          
        <li key={index}><h1>{date.quoteText}</h1><br/><p>{date.quoteAuthor}</p></li>)
      }
        </ul>
       
       
       
        
       
      </header>
    </div>
    )
}

export default Home