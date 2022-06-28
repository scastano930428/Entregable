import React from 'react';

const Bulb= ({changeQuotes}) => {
return (
<div >
   
<button onClick={changeQuotes}><div className='bulb'></div></button>

 </div>  
);


};

export default Bulb;