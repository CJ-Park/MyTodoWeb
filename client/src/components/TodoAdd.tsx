import React, { useState } from "react";
import styled from "styled-components";

type submitProps = {
  onSubmit: Function,
}

const TodoAdd = ({onSubmit}: submitProps) => {
  const [content, setContent] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onSubmit(content);
    setContent('');
  };
  
  return (
    <TodoForm>
      <TodoInput 
        type="text" name="todo" placeholder="To Do 입력" 
        value={content} onChange={handleChange} 
      />
      <AddBtn type="submit" onClick={handleClick}>&rarr;</AddBtn>
    </TodoForm>   
  )
}

const TodoForm = styled.form`
  display: flex;
  border: none;
  width: 400px;
  border-bottom: 1px solid #a5a5a5;
  &:focus-within {
    color: white;
    border-bottom: 1px solid white;
  }
`;

const TodoInput = styled.input`
  color: white;
  background-color: #262626;
  width: 100%;
  padding: 12px 15px 10px 10px;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #a5a5a5;
  }
`;
const AddBtn = styled.button`
  color: #a5a5a5;
  background-color: #262626;
  font-size: 24px;
  border: none;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

export default TodoAdd;