import React from 'react'

export default function Card(props) {

    const[cardData, setCardData] = React.useState(props.product)

    return(
        <div className='card-container'>
            <p>{cardData.productName}</p>
            <span>$ :{cardData.productPrice}</span>
            <span>Qty : {cardData.productQty}</span>
            <p style={{color : cardData.productShiped === "Yes" || "yes" ? "green" : "red"}}>{cardData.productShiped}</p>
        </div>
    )
}