import React , {Component}  from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import "./Article.css";

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
                                <div className="item-article" key={article.id}>
                                <img src="https://placeimg.com/280/200/arch" alt="" />
                                <div className="word">
                                    <h2>{article.title}</h2>
                                    <p>{article.body}.</p>
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Article;