import React, { useState, useEffect } from 'react'

import { SearchValues } from './components/searchValues'

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


const Search = () => {
    const [stock, setStock] = useState("");
    const [stocks, setStocks] = useState([]);
    
    const handlePressEnter = (e) => {
        if(e.key === "Enter") {
            if(!stocks.includes(stock)) {
                setStocks([...stocks, stock]);
            }
            setStock("");
        }
    }

    const handleDeleteChip = (deleteStock) => {
        stocks.splice(stocks.indexOf(deleteStock), 1);
        setStocks([...stocks]);
    }

    
    return (
        <div>
            <TextField
                id="standard-name"
                label="Stock "
                margin="normal"
                value={stock}
                onKeyDown={handlePressEnter}
                onChange={e => setStock(e.target.value)}
            />
            <SearchValues 
                stocks={stocks}
                deleteStock={handleDeleteChip}
            />
        </div>
    )
}

export default Search