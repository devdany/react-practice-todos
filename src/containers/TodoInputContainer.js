import React, {Component} from 'react';
import TodoInput from '../components/TodoInput';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as inputActions from '../modules/input'
import * as todosActions from '../modules/todo';

import PropTypes from 'prop-types';

class TodoInputContainer extends Component {

    id = 1;
    getId = () => {
        return ++this.id;
    }

    changeInput = (e) => {
        const {value} = e.target;
        const {InputActions} = this.props;
        InputActions.setInput(value);
    }

    addList = () => {
        const {InputActions, TodosActions, value} = this.props;
        const todo = {
            id: this.getId(),
            content: value,
            isDone: false
        };
        TodosActions.insert(todo);
        InputActions.setInput('');
    }

    render() {
        const {value} = this.props;
        const {handleChange, handleInsert} = this;

        return (
            <TodoInput
                onChange={handleChange}
                onInsert={handleInsert}
                value={value}
            />
        );
    }
}

TodoInputContainer.propTypes = {};

export default connect(
    (state) => ({
        value: state.input.get('value')
    }),
    (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        todosActions: bindActionCreators(todosActions, dispatch)
    })
)(TodoInputContainer);
