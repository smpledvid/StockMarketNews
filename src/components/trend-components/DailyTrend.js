import React, {useState, useEffect} from 'react'
import Card from '@material-ui/core/Card';

import { getDailyValues } from '../../api/useStockValueApi'

const DailyTrend = ({stock}) => {
    
    const [latestDate, setLatestDate] = useState(false);
    const [opening, setOpening] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        parseData()
    }, [stock]);

    const parseData = () => {

        (async () => {
            const [date, openPrice, closePrice] = await getDailyValues(stock)
            setOpening(openPrice);
            setClosing(closePrice);
            setLatestDate(date);
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
        </li>
    )
}

export default DailyTrend
