import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm'
import TodosApi from '../apis/TodosApi';
import { Paper } from '@material-ui/core';

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

        this.state = {
            todos: [],
        };
    }

    componentWillMount() {
        TodosApi.getAllTodos().then((response) => {
            const recievedTodos = response.data;
            this.setState({ todos: recievedTodos });
        });
    }

    addTodo(newTodoContent) {
        let newTodoElement = {
            id: parseInt(this.state.todos[this.state.todos.length - 1].id) + 1 + "",
            content: newTodoContent,
            status: true,
        }
        this.setState(state => {
            const todos = state.todos.concat(newTodoElement);
            return {
                todos,
            };
        });
    };

    removeTodo(id) {
        this.setState((prevState) => ({ todos: prevState.todos.filter(todo => todo.id !== id) }));
    }

    render() {
        return (
            <Paper elevation={3}>
                <div>
                    {this.state.todos.map((todo) => (<Todo id={todo.id} content={todo.content} status={todo.status} removeTodo={ this.removeTodo } />))}
                </div>
                <TodoForm addTodo={ this.addTodo } />
            </Paper>
        );
    }
}

export default TodoList;