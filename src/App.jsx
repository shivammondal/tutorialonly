import React from 'react';
import Card from './Card';
import './index.css';
import coinData from './Coins.json'

const coinCard=(val)=>{
    return(
        <Card 
        key={val.id}
        imgsrc= {val.imgURL}
        name={val.name}
        author={val.Creator}
        url={val.link}
  />
    )
}

const App =()=>{
    return(
    <>
    <header><h1>List of Coins</h1></header>
    <div className="container">
    
    {coinData.map(coinCard)}
    </div>
    </>
    )
}
export default App;