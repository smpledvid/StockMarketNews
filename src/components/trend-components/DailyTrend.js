import React, {useState, useEffect} from 'react'
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
        <li style={{
            display:"center",
            color: parseFloat(opening) < parseFloat(closing) ? "green" : "red"
        }}>
            {stock} ({latestDate}) <br/>
            --------------------------------------------- <br/>
            {opening} (OPEN) <br/>
            {closing} (CLOSE)
        </li>
    )
}

export default DailyTrend