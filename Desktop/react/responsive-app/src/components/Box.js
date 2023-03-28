import React from 'react'

export default function Box(props) {    
    
    const [showBox , setShowBox] = React.useState(props.showBox)
    
    function toggleClick() {        
        console.log("Before" + showBox)        
        setShowBox(prev => !prev)        
        console.log("after" + showBox)    
    }    
    
    return (        
    <div className='container-box'>             
        <div className='box-content'>SomeContent here lorem epsum           
         click the button to hide the box</div>
        <button onClick={toggleClick}>Enter</button>        
    </div>
        )}