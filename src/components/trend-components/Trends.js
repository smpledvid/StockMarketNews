import React from 'react'
import Trend from './Trend'

const Trends = ({stocks}) => {
    
    return (
        <div style={{display:"center"}}>
            <ul>
                {
                    stocks.map( stock => {
                    return (
                        <li key={stock}>
                            <Trend stock={stock}/>
                        </li>
                    );
                })}
            </ul>   
        </div>
    )
}

export default Trends