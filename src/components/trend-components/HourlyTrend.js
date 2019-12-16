import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import { LineChart } from 'react-chartkick';
import 'chart.js';

import { getHourlyValues } from '../../api/useStockValueApi'

const HourlyTrend = ({stock}) => {
    
    const [startHour, setStartHour] = useState(false);
    const [startPrice, setStartPrice] = useState(false);
    const [endHour, setEndHour] = useState(false);
    const [endPrice, setEndPrice] = useState(false);
    const [priceMap, setPriceMap] = useState(false);


    useEffect(() => {
        parseData()
    }, [stock]);

    const parseData = () => {

        (async () => {
            const [startingHour, startingPrice, endingHour, endingPrice, priceMap] = await getHourlyValues(stock)
            setStartHour(startingHour);
            setStartPrice(startingPrice);
            setEndHour(endingHour);
            setEndPrice(endingPrice);
            setPriceMap(priceMap);
        })()
    }


    return (
        <li style={{
            display:"center",
            color: parseFloat(startPrice) < parseFloat(endPrice) ? "green" : "red"
        }}>
            <Card style={{
                display:"center",
                backgroundColor:"#ededed",
                color: parseFloat(startPrice) < parseFloat(endPrice) ? "green" : "red"
            }}>
                <b>{stock}</b><br/>
                {startPrice} ({startHour})<br/>
                {endPrice} ({endHour})
            </Card>
            <LineChart data={priceMap} curve={false} prefix="$" messages={{empty: "No data"}} />
        </li>
    )
}

export default HourlyTrend
