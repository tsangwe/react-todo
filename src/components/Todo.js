import React, { Component } from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton, Divider, List, ListItemAvatar, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

class TodoElement extends Component {

    constructor(props) {
        super(props);

        this.updateStatus = this.updateStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.generateHTML = this.generateHTML.bind(this);

        this.state = {
            id: this.props.id,
            content: this.props.content,
            status: this.props.status,
        };
    }

    updateStatus() {
        this.setState((prevState) => ({ status: prevState.status ? false : true }))
    }

    removeTodo() {
        this.props.removeTodo(this.state.id);
    }

    generateHTML() {
        let todoClass = this.state.status ? "" : "done";

        return (<List dense={true}> 
                    <ListItem onClick={ this.updateStatus }>
                        <ListItemAvatar>
                            <Avatar>
                            <AssignmentOutlinedIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText class={todoClass}
                        primary={ this.state.content }
                        />
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={ this.removeTodo }>
                            <DeleteIcon />
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    <Divider />
                </List>
        );
    }

    render() {
        return this.generateHTML();
    }
}

export default TodoElement;