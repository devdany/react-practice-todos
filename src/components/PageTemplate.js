import React, {Component} from 'react';
import styled from 'styled-components';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

import PropTypes from 'prop-types';

const Container = styled.div`
  text-align: center;
  border: 1px solid darkgray;
  background-color: #fafafa;
  flex-grow: 1;
  height: 600px;
  width: 95%;
  flex-basis: 80%;
  margin: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
`

const Title = styled.h1`
  color: dimgray;
  font-size: 4em;
`

class PageTemplate extends Component {
    id = 1;
    state = {
        todoList: [],
        currentInput: ''
    }

    addList = () => {

        const {todoList, currentInput} = this.state;

        const newTodo = {
            id: this.id,
            isDone: false,
            content: currentInput
        }

        this.setState({
            todoList: [...todoList, newTodo],
            currentInput: ''
        })

        this.id++;
    }

    changeInput = (e) => {
        this.setState({
            currentInput: e.target.value
        })
    }

    removeList = (id) => {
        this.setState({
            todoList: this.state.todoList.filter(todo => todo.id!==id)
        })
    }

    changeDone = (id) => {
        const {todoList} = this.state;
        const targetIndex = todoList.findIndex(todo => todo.id === id);
        const target = {
            ...todoList[targetIndex],
            isDone: !todoList[targetIndex].isDone
        }

        this.setState({
            todoList: [
                ...todoList.slice(0, targetIndex),
                target,
                ...todoList.slice(targetIndex+1, todoList.length)
            ]
        })
    }

    render() {
        return (
            <Container>
                <Header>
                    <Title>일정  관리</Title>
                </Header>
                <TodoInput changeInput={this.changeInput} addList={this.addList} currentInput={this.state.currentInput}/>
                <TodoList changeDone={this.changeDone} todoList={this.state.todoList} removeList={this.removeList}/>
            </Container>
        );
    }
}

PageTemplate.propTypes = {};

export default PageTemplate;
