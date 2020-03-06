import React, {useState, useEffect} from 'react';
import IndividualNews from './components/invidualNews';

const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=a2976be66da94d908ee37e8a22718f4e';

const News = ({stocks}) => {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        if(stocks.length) {
            callNewsAPI();
        }
    }, [stocks]);


    async function callNewsAPI() {
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
            <div>
                {newsList.map(news => <IndividualNews key={news.url} news={news}></IndividualNews>)}
            </div>
        </div>

    )
}

export default News;