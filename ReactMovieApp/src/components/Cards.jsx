import React from "react";
import Card from './Card';
const Cards = ({data}) =>{
    return(
        <div className="cards">
        {data.map((e)=>{
           return <Card {...e}></Card>
        })}
        </div>
    )
}

export default Cards;