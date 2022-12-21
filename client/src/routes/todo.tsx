// "/todo" 일 때 보여질 화면
// 크게보면 Title, AddList, TodoList, Weather로 나뉨
import { useEffect, useState } from "react";
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

    // Todo List를 불러오기 위해 API 호출
    const getTodos = async () => {
        const res = await Api.getTodos();
        setTodos(res.data);
    }

    // User의 닉네임을 불러오기 위해 API 호출
    const getNickname = async () => {
        const res = await Api.getNickname();
        setNickname(res.data);
    }

    // Todo 추가 버튼 클릭 시 호출되는 함수
    const handleSubmit: Function = async (content: string) => {
        await Api.postTodos(content);
        getTodos();
    };

    // Todo 삭제 버튼 클릭 시 호출되는 함수
    const onRemove: Function = async (idx: number) => {
        await Api.removeTodo(idx);
        getTodos();
    };

    // Todo 체크 버튼 클릭 시 호출되는 함수
    const onCheck: Function = async (idx: number) => {
        await Api.checkTodo(idx);
        getTodos();
    };

    // 날짜 최신화를 위해 호출되는 함수
    const newDate = () => {
        const newDay = new Date();
        setDate((date.getDate() !== newDay.getDate()) ? newDay : date);
    }

    // 날짜 최신화를 위해 1초에 한번씩 호출됨
    const timer = () => {
        setInterval(newDate, 1000);
    }
    timer();

    // "/todo" 화면 렌더링 될 때 닉네임과 Todo List를 API 호출로 받아옴
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