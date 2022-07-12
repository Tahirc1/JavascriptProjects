import React from "react";
const Card = ({title,vote_average,poster_path}) =>{
    const IMG_URL = 'https://image.tmdb.org/t/p/w500/' ;
    if(poster_path){poster_path = IMG_URL+poster_path}
    else{poster_path ='https://images.pexels.com/photos/10718272/pexels-photo-10718272.jpeg?cs=srgb&dl=pexels-naimor-10718272.jpg&fm=jpg'}

    return(
       <div className="card">
        <img src={poster_path} width="300px" height={"400px"}></img>
        <div className ='footer'>
        <p>{title}</p>
        <span>{vote_average}</span>
        </div>
       </div> 
    )
}    

export default Card