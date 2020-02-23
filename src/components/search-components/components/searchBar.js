import React from 'react'
import CssTextField from '@material-ui/core/TextField';

export const SearchBar = ({setStock, stock, pressEnter}) => {
    return (
        <CssTextField style={{width:"100%"}}
                id="standard-name"
                label="Stock "
                margin="normal"
                value={stock}
                onKeyDown={pressEnter}
                onChange={e => setStock(e.target.value)}
                variant="outlined"
                type="search"
        />
    )
}
