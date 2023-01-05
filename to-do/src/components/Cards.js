import React from 'react'
import logo from './images/img.jpg'


function Cards({name, ratings}) {
  return (
    <div>
        <div style={{backgroundColor:'orange', padding:'20px', borderRadius:'20px', margin:'10px', width:'250px'}}>
            <img src={logo} width="100%" height='200px' style={{borderRadius:'20px'}}  />
            <h1>{name}</h1>
            <h1>{ratings}</h1>
        </div>
    </div>
  )
}

export default Cards