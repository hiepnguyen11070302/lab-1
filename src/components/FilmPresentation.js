import React from 'react'
export default function FlimPresentation({flims}) {
     console.log(flims);
    return (
     <div className='container'>
        {flims.map((flimss)=>(
        <div className='column'>
        <div className='card'>
        <img src={flimss.img}/>
          <h3>{flimss.name}</h3>
          <p className='title'>{flimss.club}</p>
          <p><button>Detail</button></p>
        </div>
      </div>
     ))}</div>   
  )
}