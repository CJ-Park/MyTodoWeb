import styled from "styled-components";
import {BiSquare, BiCheckSquare, BiTrash} from "react-icons/bi";
import { todoType } from "../routes/todo";

type todoProps = {
  todo: todoType,
  onRemove: (id: number) => void,
  onCheck: (id: number) => void
}

const TodoItem = ({todo, onRemove, onCheck}: todoProps) => {
    return (
        <Container>
            <CheckBtn onClick={() => onCheck(todo.id)}>
                {todo.checked ? <BiCheckSquare /> : <BiSquare />}
            </CheckBtn>
            <Context 
            style={{
                textDecorationLine: todo.checked ? "line-through" : "none",
                color: todo.checked ? "#a5a5a5" : "white"}}>
                {todo.text}
            </Context>
            <DeleteBtn onClick={() => onRemove(todo.id)}>
                <BiTrash />
            </DeleteBtn>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Context = styled.div`
  color: white;
`;
const Btn = styled.button`
  background-color: #262626;
  color: #a5a5a5;
  border: none;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
const CheckBtn = styled(Btn)`
  font-size: 30px;
  padding: 8px 8px 0 0;
`;
const DeleteBtn = styled(Btn)`
  font-size: 25px;
  padding: 8px 0 0 8px;
`;

export default TodoItem;