import axios from 'axios';
import React , {Component} from'react';
import {Link} from 'react-router-dom';
import "./FormArticle.css";
import swal from 'sweetalert';
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
        const article = this.state.articlePost;
        if(article.title !== "" && article.body !== "") {
            axios.post(`http://localhost:3004/articles`, this.state.articlePost) 
            .then(() => {
                this.setState({
                    articlePost:{
                        id:1,
                        title: "",
                        body: "",
                    }
                })
                swal("berhasil","berhasil menambahkan artikerl","success");
            })
        }else {
            swal("gagal","isi terlebih dahulu form artikel","error");
        }
    }

    handleFormChange = (event) => {
        const newArticlePost = {...this.state.articlePost};
        newArticlePost[event.target.name] = event.target.value;
        const timestamp = new Date().getTime();
        newArticlePost['id' ] = timestamp;
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
                <div className="btn-back">
                <Link to="/article" className='btn-form-back'>Back</Link>
                </div>
                <div className="form-wrap">
                    <h2 className='head-form-article'>Form Article</h2>
                    <form action="" className='form-article'> 
                        <div className="form-article">
                            <label htmlFor="title">Title</label>
                            <input type="text" name='title' placeholder='judul artikel' onChange={(event) => this.handleFormChange(event)} value={this.state.articlePost.title} />
                        </div>
                        <div className="form-article">
                            <label htmlFor="body">Body</label>
                            <textarea name='body' onChange={(event) => this.handleFormChange(event)} value={this.state.articlePost.body}></textarea>
                        </div>
                        <button onClick={(data) => this.handleSubmit(data)}>oke</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default FormArticle;