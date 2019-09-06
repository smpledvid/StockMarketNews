import React from 'react'
import Chip from '@material-ui/core/Chip';

export const SearchValues = ({stocks, deleteStock}) => {
    
    return (
        <div>
            {stocks.map( stock => {
                return (
                    <div key={stock}>
                        <Chip
                            label={stock}
                            onDelete={() => deleteStock(stock)}
                        />
                    </div>
                );
            })}
        </div>
    );
}