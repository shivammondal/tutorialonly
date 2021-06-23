import React from 'react';
import './index.css';
const Card =(props)=>{
    return(<>
   
        <div className="card">
            
            <img src={props.imgsrc} alt={props.alt} />
            <div className="info" >
            <h2>{props.name}</h2>
            <span>Author: {props.author}</span>
            <a href={props.url} rel="noreferrer" target="_blank" > Lets Go </a>
            </div>
        </div>
       
       
    
    </>
    );
};

export default  Card;
