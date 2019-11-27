 import React, { useState, useEffect } from 'react'

import { SearchBar } from './components/searchBar'
import { SearchValues } from './components/searchValues'

const Search = ({stocks, setStocks}) => {
    const [stock, setStock] = useState("");
    
    const handlePressEnter = (e) => {
        if(e.key === "Enter") {
            if(stock.trim() !== "" && !stocks.includes(stock.toUpperCase())) {
                setStocks([...stocks, stock.toUpperCase()])
            } else {
                // do a quick ltttle thing
            }
            setStock("");
        }
    }

    const handleDeleteChip = (deleteStock) => {
        stocks.splice(stocks.indexOf(deleteStock.toUpperCase()), 1);
        setStocks([...stocks]);
    }

    
    return (
        <div>
            <SearchBar 
                pressEnter={handlePressEnter}
                stock={stock}
                setStock={setStock}
            />

            <SearchValues 
                stocks={stocks}
                deleteStock={handleDeleteChip}
            />
        </div>
    )
}

export default Search
