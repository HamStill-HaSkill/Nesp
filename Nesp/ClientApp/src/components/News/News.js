import React, { useEffect, useState } from 'react';
import NewsBox from './NewsBox';
import axios from 'axios'
import { proxy } from 'jquery';

const News = (props) => {    
    return (
    <>
        {props.news.map((n) => < NewsBox n={n} />)}
    </>
    );
}

export default News;