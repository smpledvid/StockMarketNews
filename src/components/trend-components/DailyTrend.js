import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';
import { LineChart } from 'react-chartkick';
// import 'chart.js';

import { getDailyValues } from '../../api/useStockValueApi'

const DailyTrend = ({stock}) => {
    
    const [latestDate, setLatestDate] = useState(false);
    const [opening, setOpening] = useState(false);
    const [closing, setClosing] = useState(false);
    const [priceMap, setPriceMap] = useState(false);
    

    useEffect(() => {
        parseData()
    }, [stock]);

    const parseData = () => {

        (async () => {
            const [date, openPrice, closePrice, priceMap] = await getDailyValues(stock)
            setOpening(openPrice);
            setClosing(closePrice);
            setLatestDate(date);
            setPriceMap(priceMap);
        })()
    }


    return (
        <li>
            <Card style={{
                display:"center",
                backgroundColor:"#ededed",
                color: parseFloat(opening) < parseFloat(closing) ? "green" : "red"
            }}>
                <b>{stock} ({latestDate})</b><br/>
                {opening} (OPEN)<br/>
                {closing} (CLOSE)
            </Card>
            <LineChart data={priceMap} curve={false} prefix="$" messages={{empty: "No data"}} />

        </li>
    )
}

export default DailyTrend
