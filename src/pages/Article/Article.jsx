import React , {Component}  from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import "./Article.css";
import CardArticle from './CardArticle/CardArticle';

class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            article: [],
        }
    }

    getArticleFromAPI = () => { 
        axios.get(`http://localhost:3004/articles`)
        .then(res => {
            const data = res.data;
            this.setState({
                article: data,
            })
        })
    }

    componentDidMount() {
        this.getArticleFromAPI();
    }


    render() {
        return(
            <div className="container-article">
                <Link to="/article/form-article" className="btn-form">Form</Link>
                <h1 className='header'>The Article</h1>
                <div className="wrap-article">
                    {
                        this.state.article.map(article => {
                            return(
                                <CardArticle key={article.id} data={article}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Article;