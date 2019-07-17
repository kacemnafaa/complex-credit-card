import React from 'react'
import './carnum.css'
import './tex1.css'
import './tex3.css'
import './tex4.css'

const renderCardNumber = number => {
    number = number.toString()
    // '7253325678951245'
    let resultStr = ''
    if(number.length<20){
        for(let i =0; i < number.length; i += 4) {
            resultStr += number.slice(i, i + 4) + ' '
          }
        }
    return resultStr
    
  }
  const renderCardthu = thu => {
    thu = thu.toString()
    let resultStr = ''
    if(thu.length<5){
        
            resultStr += thu.slice(0,  2) +'/'+thu.slice(2)
          
        }
    return resultStr
    
  }
  
const Cardnum =(props)=>{
    return(
   <div className="carnum">
       <p className="tex1"> {renderCardNumber(props.cardnum)}</p>  
       <p className="tex3">5422</p> <span className="tex4">{renderCardthu(props.thu)}</span>
       <p className="tex3">{(props.name.toUpperCase())}</p>
    
   </div>
    )}
    export default Cardnum 