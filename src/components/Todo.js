import React, { Component } from 'react';
import { Card, CardContent } from '@material-ui/core';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

class TodoElement extends Component {
    constructor(props) {
        super(props);

        this.updateStatus = this.updateStatus.bind(this);
        this.removeTodo = this.removeTodo.bind(this);

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

    render() {
        return (
            // <Card>
            //     { 
            //         this.state.status ? 
            //         <CardContent>
            //             <span onClick={ this.updateStatus }>{ this.state.content }</span>
            //             <CancelOutlinedIcon onClick={ this.removeTodo } />
            //         </CardContent> 
            //         : <CardContent><strike>
            //             <span onClick={ this.updateStatus }>{ this.state.content }</span>
            //             <CancelOutlinedIcon onClick={ this.removeTodo } />
            //         </strike></CardContent>
            //     }
            // </Card>
            <ListItem>
                <ListItemText
                primary="Single-line item"
                secondary={secondary ? 'Secondary text' : null}
                />
                <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default TodoElement;