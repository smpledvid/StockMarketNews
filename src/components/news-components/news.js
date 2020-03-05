import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=a2976be66da94d908ee37e8a22718f4e';

const News = ({stocks}) => {
    const [newsList, setNewsList] = useState([]);

    async function buttonClickCallApi() {
        var req = new Request(url);
        var result = await fetch(req).then(function(response) {
            return response.json();
        });

        setNewsList(result.articles);
    };

    function getTitle() {
        if(newsList.length) {
            return newsList[0].title;
        }
    }

    return (
        <div>
            <h1>HERE IS THE NEWS :[</h1>
            <p>{getTitle()}</p>
            <Button variant="contained" onClick={buttonClickCallApi}>
                CALL THE NEWS API
            </Button>
        </div>
        
    )
}

export default News;