
import { useState } from 'react'
import './App.css'
import Bulb from './components/Bulb'
import Card from './components/Card'
import quotes from "./json/quotes.json";


const colors = ['#900C3F', '#C70039', '#581845', '#FF5733', '#FFC300', '#DAF7A6' ]
function App(){


const createNumberRandom = array => {
return Math.floor(Math.random() * array.length)
}

let NumberRandomQuote = createNumberRandom(quotes)

const [randomQuote, setRandomQuote] = useState(quotes[NumberRandomQuote])
 
let randomColorsIndex = Math.floor(Math.random() * colors.length);
let color = colors[randomColorsIndex]

document.body.style = `background: ${color}`


const changeQuotes = () => {
  color = colors[randomColorsIndex]
  NumberRandomQuote = createNumberRandom(quotes)
  setRandomQuote(quotes[NumberRandomQuote])
}


return (
    <div  className="App">
     <Card
     randomQuote={randomQuote}
     changeQuotes={changeQuotes}
     />
     
      </div>
     
  )

} 






export default App

