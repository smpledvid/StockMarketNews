import React, { useState, useEffect } from 'react'

import { SearchBar } from './components/searchBar'
import { SearchValues } from './components/searchValues'

import { useStockValueApi } from '../../api/useStockValueApi'

const Search = () => {
    const [stock, setStock] = useState("");
    const [stocks, setStocks] = useState([]);
    
    const handlePressEnter = (e) => {
        if(e.key === "Enter") {
            if(!stocks.includes(stock)) {
                setStocks([...stocks, stock]);
            }
            setStock("");
            useStockValueApi(stock)
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