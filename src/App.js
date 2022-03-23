import React, { useState, useEffect } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#9eaddc').all(7));

  const handleSubmit = (e) => {
    e.preventDefault();
    try{

      let colors = new Values(color).all(7);
      setList(colors);
     
    }
    catch(error){
      setError(true);
      console.log(error);
    }
  }
  
  return <>
   <section className='container'>
    <h3 style={{color: `${color}`}}>Colorify CSS</h3>
    <form onSubmit={handleSubmit}>
  <input type='text' value={color} onChange={(e) => setColor(e.target.value)}
  className={`${error?'error':null}`} placeholder="#9eaddc"
  />
  <button className='btn' type='submit' style={{color: `${color}`}}>search</button>
    </form>
  </section>

  <section className='colors'>
    {list.map((color, index) => {
      return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
    })}
  </section>
  </>
}

export default App