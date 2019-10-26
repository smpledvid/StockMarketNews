 import React, { useState, useEffect } from 'react'

import { SearchBar } from './components/searchBar'
import { SearchValues } from './components/searchValues'

const Search = ({stocks, setStocks}) => {
    const [stock, setStock] = useState("");
    
    const handlePressEnter = (e) => {
        if(e.key === "Enter") {
            if(!stocks.includes(stock)) {
                setStocks([...stocks, stock])
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
