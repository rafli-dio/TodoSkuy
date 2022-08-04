import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardArticle = (props) => {
    const Navigate = useNavigate();
    return(
        <div className="item-article" key="">
        <img src="https://placeimg.com/255/200/arch" alt="" />
        <div className="word">
            <h2 onClick={() => Navigate(`/article/detail-article/${props.data.id}`)} >{props.data.title}</h2>
            <p>{props.data.body}</p>
        </div>
    </div>
    )
}

export default CardArticle;