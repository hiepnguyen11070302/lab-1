import { Films } from '../shared/ListOfFilms'
import { useState } from 'react'
import React from 'react'
export default function Films1() {
    const [film, setFilm] = useState([])
    return (
        <div className='container' >
            {
                Films.map((film) => (
                    <div className='column' key={film.id}>
                        <div className='card'>
                            <img src={film.img} alt=''/>
                            <p className='title'>{film.Title}</p>
                            <p>{film.Nation}</p>
                            <p>{film.Year}</p>
                            {/* <p className='title'></p>
                            <p className='title'>{film.title}</p> */}
                            <button className='button' onClick={()=>{setFilm(film)}}><a href='#popup1' id='openPopUp'>Detail</a></button>
                        </div>
                    </div>
                ))}
                <div id='popup1' className='overlay'>
                    <div className='popup'>
                        <img style={{width:'70%'}} src={film.img}></img>
                        <h2>{film.Title}</h2>
                        <a className='close' href='#'>&times;</a>
                        <div className='content'>
                            {film.info}
                        </div>
                    </div>
                </div>
        </div>
    )
}