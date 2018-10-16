import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as todoActions from '../modules/todo';
import TodoList from "../components/TodoList";

class TodoListContainer extends Component {

    changeDone = (id) => {
        const {TodoActions} = this.props;
        TodoActions.toggle(id);
    }

    removeList = (id) => {
        const {TodoActions} = this.props;
        TodoActions.remove(id);
    }

    render() {

        const {todos} = this.props;
        const {handleToggle, handleRemove} = this;

        return (
            <TodoList
                todos={todos}
                onToggle={handleToggle}
                onRemove={handleRemove}
            />
        );
    }
}

export default connect(
    (state) => ({
        todos: state.todos
    }),
    (dispatch) => ({
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodoListContainer);

