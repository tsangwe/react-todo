import React, { Component } from 'react'
import { TextField, IconButton } from '@material-ui/core';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';

class TodoForm extends Component {
    constructor(props) {
        super(props);

        this.addTodo = this.addTodo.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        
        this.state = {
            value: '',
        }
    }

    handleFormChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    addTodo() {
        console.log(this.state.value);
        this.props.addTodo(this.state.value);
    }

    render() {
        return (
            <form>
                <TextField type="text" 
                        variant="outlined"
                        value={ this.state.newTodoContent } 
                        onChange={ this.handleFormChange } />
                <IconButton  onClick={ this.addTodo }><PostAddOutlinedIcon /></IconButton>
            </form>
        )
    }
}

export default TodoForm;
