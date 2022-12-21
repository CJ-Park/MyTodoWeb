// TodoList 컴포넌트
// TodoItem의 배열로 이루어짐
import styled from "styled-components";
import { todoType } from "../routes/todo";
import TodoItem from "./TodoItem";

type listProps = {
    todos: todoType[],
    onRemove: Function,
    onCheck: Function,
}

// todos 배열을 map으로 순회하며 출력
// key값으로 MongoDB에 저장된 id값을 저장
const TodoList = ({todos, onRemove, onCheck}: listProps) => {
    return (
        <Container>
            {todos.map((todo: todoType) => (
                <TodoItem 
                  todo={todo}
                  key={todo._id}
                  id={todo._id}
                  onRemove={onRemove}
                  onCheck={onCheck}
                />
            ))}
        </Container>
    );
};

const Container = styled.div`
  border: 1px solid #a5a5a5;
  border-radius: 20px;
  padding: 5px 15px;
  width: 450px;
  height: 230px;
  margin-top: 30px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
`;

export default TodoList;