import React from 'react'


export default function Header(props) {
    

    return (
        <div className='nav-bar'>
            <div className='title'>
                <div><span className="material-symbols-outlined">resume</span>Animate</div>
                </div>
            <div className='navigation'>
            <div className='nav img'><img src = "./banner.png"/></div>
            <div className='nav one'>About</div>
            <div className='nav two'>Buyer</div>
            <div className='nav three'>Store</div>
            <div className='nav four'>Seller</div>
        </div>
        </div>
       
    )
}