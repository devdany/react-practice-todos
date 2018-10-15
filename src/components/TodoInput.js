import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputContainer = styled.div`
  padding: 0px 20px 0px 20px;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  flex-grow: 1;
  margin-right: 10px;
  background-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  border-right-color: transparent;
  outline: none;
  font-size: 1.3em;
`

const Button = styled.button`
  background-color: #fafafa;
  border: 1px solid green;
  color: green;
  flex-grow: 0.2;
`


const TodoInput = ({addList, changeInput, currentInput}) => {

    const pressEnter = (e) => {
        if(e.key === 'Enter'){
            addList();
        }
    }

    return (
        <InputContainer>
            <Input type="text" onChange = {changeInput} value={currentInput}/>
            <Button onClick = {addList}>추가</Button>
        </InputContainer>)
};


TodoInput.propTypes = {};

export default TodoInput;
