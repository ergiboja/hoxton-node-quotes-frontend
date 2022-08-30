import { useState , useEffect } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([{}]);
  useEffect(()=> {fetch('http://localhost:4000/quotes')
  .then((response) => response.json())
  .then((data) => setData([...data])) },[])
  console.log(data)
 
  

 
  return (
    <div className="App">
      <header className="App-header">
      {
        data.map((date) => 
          
        <h1>{date.quoteText}</h1>)
      }
        
        <h1></h1>
        <p>Author</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            Next Quote:
          </button>
        </p>
        
       
      </header>
    </div>
  )
}

export default App
