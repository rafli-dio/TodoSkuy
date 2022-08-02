import axios from 'axios';
import React , {Component} from'react';
import {Link} from 'react-router-dom';
import "./FormArticle.css";

class FormArticle extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            articlePost : {
                id: 1,
                title: "",
                body: "",
            }
        }
    }

    postArticleFromApi = () => {
        axios.post(`http://localhost:3004/articles`, this.state.articlePost) 
        .then(() => {
            this.setState({
                id:1,
                title: "",
                body: ""
            })
        })
    }

    handleFormChange = (event) => {
        const newArticlePost = {...this.state.articlePost};
        newArticlePost[event.target.name] = event.target.value;
        this.setState({
            articlePost: newArticlePost
        })
    }

    handleSubmit = (event) => {
        this.postArticleFromApi();
        event.preventDefault()
    }
    


    render() {
        return(
            <div className="wrap-form-article">
                <Link to="/article" className='btn-form'>Back</Link>
                <div className="form-wrap">
                    <h2 className='head-form-article'>Form Article</h2>
                    <form action="" className='form-article'> 
                        <div className="form-article">
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' placeholder='judul artikel' onChange={(event) => this.handleFormChange(event)} />
                        </div>
                        <div className="form-article">
                            <label htmlFor="body">Body</label>
                            <textarea onChange={(event) => this.handleFormChange(event)}/>
                        </div>
                        <button onClick={(data) => this.handleSubmit(data)}>oke</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormArticle;