import React, {useState} from 'react';
import Card from '@material-ui/core/Card';

const IndividualNews = ({news}) => {
    return (
        <div>
            <Card>{news.title}</Card>
        </div>
    )
}

export default IndividualNews;