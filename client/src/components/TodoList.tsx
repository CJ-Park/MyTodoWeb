import styled from "styled-components";
import { todoType } from "../routes/todo";
import TodoItem from "./TodoItem";

type listProps = {
    todos: todoType[],
    onRemove: Function,
    onCheck: Function,
}

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