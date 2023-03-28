import React from 'react'
import Box from './Box'

export default function Boxes(props) {    
    
    const[showBox , setShowBox] = React.useState(false)    
    
    return (        
    <div className='boxes-container'>
                
        <Box showBox= {showBox} />
                
        <Box />
                
        <Box />
                
        <Box />
                
        <Box />
                
    </div>
        )}