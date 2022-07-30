import React, {Component, Fragment} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import swal from 'sweetalert';
import "./Todo.css";

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: [],
            todosPost : {
                id: 1,
                activity : ""
            },
            isUpdate: false
        }
    }

    getTodoFromAPI = () => {
        axios.get(`http://localhost:3004/todos?_sort=activity&_order=desc`)
            .then((res) => {
                const data = res.data;
                this.setState({
                    todo : data
                })
            })
    }

    postTodoFromAPI = () => {
        const todo = this.state.todosPost;
        if(todo.activity !== "") {
            axios.post(`http://localhost:3004/todos`, this.state.todosPost)
                .then(() => {
                    this.setState({
                                    todosPost : {
                                    id: 1,
                                    activity : ""
                                }
                    })
                    this.getTodoFromAPI();
                    swal("berhasil","berhasil menambahkan kegiatan","success");
                }) 
        }else {
            swal("isi dulu !" , "isi terlebih dahulu form", "error");
        }
    }

    putTodoFromAPI = () => {
        axios.put(`http://localhost:3004/todos/${this.state.todosPost.id}`, this.state.todosPost)
        .then(() => {
            this.setState({
                todosPost: {
                    id: 1,
                    activity: ''
                },
                isUpdate: false
            })
            this.getTodoFromAPI();
        })
    }

    handleUpdate = (data) => {  
        this.setState({
            todosPost:data,
            isUpdate: true
        })
    }

    
    handelCheckList = (data) => {
        axios.delete(`http://localhost:3004/todos/${data}`)
            .then(() => {
                this.getTodoFromAPI();
            })
    }


    handleSubmit = (event) => {
        if(this.state.isUpdate) {
            this.putTodoFromAPI();
            event.preventDefault();
        }else {
            this.postTodoFromAPI();
            event.preventDefault();
        }
    }

    handleFormChange = (event) => {
            const newTodoPost = {...this.state.todosPost};
            const timestamp = new Date().getTime();
            if(!this.state.isUpdate) {
                newTodoPost['id'] = timestamp;
            }
            newTodoPost[event.target.name] = event.target.value;
            this.setState({
                todosPost : newTodoPost
            })
    }    

    

    componentDidMount() {
        this.getTodoFromAPI()
    }


    render() {
        return(
            <Fragment>
                <div className="container-form">
                    <form action="">
                    <h2>Tambah Yang Harus Dilakukan</h2>
                        <div className="form-group">
                            <label htmlFor="activity">Masukan hal yang dilakukan</label>
                            <input type="text" name="activity" placeholder='Masukan Aktivitas' value={this.state.todosPost.activity} onChange={(event) => this.handleFormChange(event)} />
                        </div>
                        <button onClick={(data) => this.handleSubmit(data)}>Tambah</button>
                    </form>
                </div>
                <div className="container-card-todo">
                    <h2>Yang Harus Dilakukan</h2>
                    <div className="list-item">
                        {
                            this.state.todo.map((todo) => {
                                return(
                                    <div className="item" key={todo.id}>
                                    <div className="inner">
                                        <div >
                                            <h2 className='activity'>{todo.activity}</h2>
                                        </div>
                                        <div className="btn-aksi">
                                            <i className="fa fa-pencil-square-o btn" onClick={() => this.handleUpdate(todo)} ></i>
                                            <i className='fa fa-check-circle btn' onClick={() => this.handelCheckList(todo.id)}></i>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Todo;