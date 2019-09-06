import React from 'react'
import Chip from '@material-ui/core/Chip';

export const SearchValues = ({stocks, deleteStock}) => {
    
    return (
        <div style={{display: "inline-block"}}>
            {stocks.map( stock => {
                return (
                    <span style={{float: "left"}} key={stock}>
                        <Chip
                            label={stock}
                            onDelete={() => deleteStock(stock)}
                        />
                    </span>
                );
            })}
        </div>
    );
}
