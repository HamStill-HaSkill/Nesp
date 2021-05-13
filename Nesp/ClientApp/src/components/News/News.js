import React, { useState } from 'react';
import NewsBox from './NewsBox';

const News = () => {
    let [news, setNews] = useState([{
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToM59Ou3wqS4s8jj7qGdWGv6f_dL0oNmtSg&usqp=CAU",
        tittle: "NEWS",
        description: "News text text text text text",
        link: "/onliner",
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToM59Ou3wqS4s8jj7qGdWGv6f_dL0oNmtSg&usqp=CAU",
        tittle: "NEWS",
        description: "News text text text text text",
        link: "/onliner",
    }, {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRToM59Ou3wqS4s8jj7qGdWGv6f_dL0oNmtSg&usqp=CAU",
        tittle: "NEWS",
        description: "News text text text text text",
        link: "/onliner",
    }]);


    return (
        <>
            {news.map((n) => <NewsBox n={n}/>)}
        </>
    );
}

export default News;