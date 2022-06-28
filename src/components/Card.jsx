import React from 'react';
import Bulb from './Bulb'



const Card = ({randomQuote, changeQuotes}) => {
    return (
        <div className='card'>
            <p>{randomQuote.quote /* = quotes[0].quote*/}</p>
            <h2>{randomQuote.author}</h2>
            <Bulb
    changeQuotes={changeQuotes}
    />

        </div>
    )
}


export default Card