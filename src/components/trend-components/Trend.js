import React, {useState, useEffect} from 'react'
import { getValues } from '../../api/useStockValueApi'

const Trend = ({stock, date}) => {
    
    const [opening, setOpening] = useState(false);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        parseData()
    }, [stock]);

    const parseData = () => {

        (async () => {
            const [openPrice, closePrice] = await getValues(stock, date)
            setOpening(openPrice);
            setClosing(closePrice);
        })()
    }


    return (
        <ul style={{
            display:"center",
            color: parseFloat(opening) < parseFloat(closing) ? "green" : "red"
        }}>
            {stock} | {opening} | {closing}
        </ul>
    )
}

export default Trend