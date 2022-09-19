import React from "react";
import { Films } from "../shared/ListOfFilms";
export default function Players1() {
    return (
       <div className='container'>
        {Films.map((flim)=>(
           <div className='column'>
           <div className='card'>
           <img src={flim.img}/>
           </div>
            <div className="titleFilm">
             <p className='title'>{flim.Title}</p>
            <h3>{flim.Nation}</h3>
            <h3>{flim.Year}</h3>
            </div>
         </div>
        ))}
    </div>
    )
}