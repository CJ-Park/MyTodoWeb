import axios from "axios";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Api } from "../api/Api";
import TodoTitle from "../components/Title";
import TodoAdd from "../components/TodoAdd";
import TodoList from "../components/TodoList";
import Weather from "../components/Weather";

export type todoType = {
    _id: number,
    content: string,
    checked: boolean,
}

const Main = () => {
    const curDate = new Date()
    const [date, setDate] = useState<Date>(curDate);
    const [todos, setTodos] = useState<todoType[]>([]);
    const [nickname, setNickname] = useState<String>('');

    const getTodos = async () => {
        const res = await Api.getTodos();
        setTodos(res.data);
    }

    const getNickname = async () => {
        const res = await Api.getNickname();
        setNickname(res.data);
    }

    const handleSubmit: Function = async (content: string) => {
        await Api.postTodos(content);
        getTodos();
    };

    const onRemove: Function = async (idx: number) => {
        await Api.removeTodo(idx);
        getTodos();
    };

    const onCheck: Function = async (idx: number) => {
        await Api.checkTodo(idx);
        getTodos();
    };

    const newDate = () => {
        const newDay = new Date();
        setDate((date.getDate() !== newDay.getDate()) ? newDay : date);
    }

    const timer = () => {
        setInterval(newDate, 1000);
    }
    timer();

    useEffect(() => {
        getNickname();
        getTodos();
    }, [])

    return (
        <Container>
            <TodoTitle title={`${nickname}님 환영합니다. 오늘은 ${date.getMonth() + 1}월 ${date.getDate()}일 입니다. 할 일을 정리해보세요!`} fontSize="18px"></TodoTitle>
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