import React from 'react'
import './Titlestl.css'
const Title=(props)=>{
     const card =props.card
     return(
    <div className="Titlestl">
     <h1>{card}</h1>
    </div>
     )
}
export default Title