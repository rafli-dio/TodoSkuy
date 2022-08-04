import axios from 'axios';
import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom';
import "./DetailArticle.css";

const DetailArticle = () => {
    const [article,setArticle] = useState({});
    let {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3004/articles/${id}`)
        .then(res => {
            const data = res.data;
            setArticle(data);
        })
    })

    return(
        <div className='wrap-detail-article'>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
        </div>
    )
}

export default DetailArticle;