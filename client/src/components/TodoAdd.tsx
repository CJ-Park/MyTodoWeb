// Todo Add => todo 입력하는 input과 api 호출하는 버튼으로 구성됨
import React, { useState } from "react";
import styled from "styled-components";

type submitProps = {
  onSubmit: Function,
}

const TodoAdd = ({onSubmit}: submitProps) => {
  const [content, setContent] = useState('');
  
  // Todo 입력값 변수에 저장
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // 버튼 클릭시 input 비우면서 상위 컴포넌트의 onSubmit 호출
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