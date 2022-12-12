import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TodoTitle from "../components/Title";
import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";
import Weather from "../components/Weather";

export type todoType = {
    id: number,
    text: string,
    checked: boolean,
}

const Main = () => {
    const curDate = new Date()
    const [date, setDate] = useState<Date>(curDate);
    const [todos, setTodos] = useState<todoType[]>([]);
    const todoId = useRef(0);

    const handleSubmit = (text: string) => {
        const todo = {
            id: todoId.current,
            text,
            checked: false,
        };
        setTodos(todos.concat(todo));
        todoId.current += 1;
    };

    const onRemove = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onCheck = (id: number) => {
        setTodos(
            todos.map((todo) => {
                return todo.id === id ? {...todo, checked: !todo.checked} : todo;
            })
        );
    };

    const newDate = () => {
        const newDay = new Date();
        setDate((date.getDate() !== newDay.getDate()) ? newDay : date);
    }

    const timer = () => {
        setInterval(newDate, 1000);
    }
    timer();

    return (
        <Container>
            <TodoTitle title={`XXX님 환영합니다. 오늘은 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다. 할 일을 정리해보세요!`} fontSize="18px"></TodoTitle>
            <Content>
                <TodoAdd onSubmit={handleSubmit}/>
                <TodoList todos={todos} onRemove={onRemove} onCheck={onCheck}/>
            </Content>    
            <Weather />
        </Container>
    )
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -70px;
`;

export default Main;