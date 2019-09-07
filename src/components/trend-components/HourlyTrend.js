import React, {useState, useEffect} from 'react'
import { getHourlyValues } from '../../api/useStockValueApi'

const HourlyTrend = ({stock}) => {
    
    const [startHour, setStartHour] = useState(false);
    const [startPrice, setStartPrice] = useState(false);
    const [endHour, setEndHour] = useState(false);
    const [endPrice, setEndPrice] = useState(false);


    useEffect(() => {
        parseData()
    }, [stock]);

    const parseData = () => {

        (async () => {
            const [startingHour, startingPrice, endingHour, endingPrice] = await getHourlyValues(stock)
            setStartHour(startingHour);
            setStartPrice(startingPrice);
            setEndHour(endingHour);
            setEndPrice(endingPrice);
        })()
    }


    return (
        <li style={{
            display:"center",
            color: parseFloat(startPrice) < parseFloat(endPrice) ? "green" : "red"
        }}>
            {stock} <br/>
            --------------------------------------------- <br/>
            {startPrice} ({startHour}) <br/>
            {endPrice} ({endHour})
        </li>
    )
}

export default HourlyTrend