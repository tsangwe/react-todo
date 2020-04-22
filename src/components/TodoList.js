import React, { Component } from 'react';
import Todo from './Todo';
import TodosApi from '../apis/TodosApi';
import { Paper, TextField, IconButton } from '@material-ui/core';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);

        this.state = {
            todos: [],
            newTodoContent: '',
        };
    }

    componentWillMount() {
        TodosApi.getAllTodos().then((response) => {
            const recievedTodos = response.data;
            this.setState({ todos: recievedTodos });
            console.log(this.state.todos);
        });
    }

    addTodo = () => {
        let newTodoElement = {
            id: parseInt(this.state.todos[this.state.todos.length - 1].id) + 1 + "",
            content: this.state.newTodoContent,
            status: true,
        }
        this.setState(state => {
            const todos = state.todos.concat(newTodoElement);
            return {
                todos,
                newTodoContent: '',
            };
        });
    };

    removeTodo(id) {
        this.setState({todos: this.state.todos.filter(todo => todo.id !== id)});
    }

    // removeTodo(id) {
    //     var todoList = [...this.state.todos];
    //     const todoIndex = todoList.map((todo) => todo.id ).indexOf(id);
    //     if (todoIndex !== -1) {
    //         todoList.splice(todoIndex, 1);
    //         console.log(todoList);
    //         this.setState({todos: todoList});
    //     }
    // }
    
    // removeTodo = id => {
    //     this.setState(state => {
    //         const todos = state.todos.filter(todo => todo.id !== id);
    //         console.log(todos);
    //         return {
    //             todos
    //         };
    //     });
    // };

    // removeTodo(id) {
    //     let todoList = this.state.todos;
    //     const todoIndex = todoList.map((todo) => todo.id ).indexOf(id);
    //     todoList.splice(todoIndex, 1)
    //     this.setState({
    //         todos: todoList,
    //     });
    //     console.log("Removed todo and new list is: ");
    //     console.log(this.state.todos);
    // }

    handleFormChange(event) {
        this.setState({
            newTodoContent: event.target.value
        });
    }

    render() {
        return (
            <Paper elevation={3}>
                <div>
                    {this.state.todos.map((todo) => (<Todo id={todo.id} content={todo.content} status={todo.status} removeTodo={ this.removeTodo } />))}
                </div>
                <form>
                    <TextField type="text" 
                            variant="outlined"
                            value={ this.state.newTodoContent } 
                            onChange={ this.handleFormChange } />
                    <IconButton></IconButton><PostAddOutlinedIcon id="addIcon" onClick={ this.addTodo } /></IconButton>
                </form>
            </Paper>
        );
    }
}

export default TodoList;