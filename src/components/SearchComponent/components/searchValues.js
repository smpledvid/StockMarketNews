import React from 'react'
import Chip from '@material-ui/core/Chip';

export const SearchValues = ({stocks, setStocks}) => {
    const handleDeleteChip = () => {
        console.log("YOU DIDNT WRITE THE DELETE YET")
    }

    return (
        <div>
            {stocks.map( stock => {
                return (
                    <div key={stock}>
                        <Chip
                            label={stock}
                            onDelete={handleDeleteChip}
                        />
                    </div>
                );
            })}
        </div>
    );
}