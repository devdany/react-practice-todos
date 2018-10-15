import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'



const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TodoListItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid lightgray;
  text-align: left;
  
  &:last-child{
    border-bottom: 1px solid lightgray;
  }
`

const CheckBox = styled.input`
  flex-grow: 0.1;
  margin-left: 20px;
`

const Content = styled.span`
  flex: 1;
  text-decoration: ${props => props.isDone? 'line-through' : 'none'}
`

const Remove = styled.span`
  flex-grow: 0.1;
  color: red;
  cursor: pointer;
`

class TodoList extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todoList !== nextProps.todoList
    }


    render() {
        const {todoList, changeDone, removeList} = this.props;

        return (
            <TodoListContainer>
                {todoList.map(todo => (
                    <TodoListItem key={todo.id}>
                        <CheckBox type="checkbox" checked={todo.isDone} onChange={() =>{changeDone(todo.id)}}/><Content isDone={todo.isDone}>{todo.content}</Content><Remove onClick={(e) => {removeList(todo.id)}}>[지우기]</Remove>
                    </TodoListItem>
                ))}
            </TodoListContainer>
        );
    }
}

TodoList.propTypes = {};

export default TodoList;