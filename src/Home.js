import React from 'react'
import vacay from "./image/santorini.jpg";

const Home = () => {
  return (
    <div>
        <h1 className='' style={{color: "red",fontSize:"10rem"}}>Hello World</h1>
        <div className='vacation'>
        <img src={vacay} alt="vacation" className='vac' />
        </div>
    </div>
  )
}

export default Home