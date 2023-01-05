import React from 'react'
import Cards from './Cards'


const Cards2 = () => {

    const Sty = {
        display:'flex', 
        justifyContent:'center', 
    }
  return (
    <>
    <div style={{Sty}}>
        <Cards name='Love Daminis' ratings='9/10' />
          <Cards name='Boy Alone ' ratings='6/10'/>
          <Cards name='Billion Baby ' ratings='10/10'/>
    </div>
    </>
  )
}

export default Cards2