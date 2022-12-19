import styled from "styled-components";
import {BiSquare, BiCheckSquare, BiTrash} from "react-icons/bi";
import { todoType } from "../routes/todo";

type todoProps = {
  todo: todoType,
  id: number,
  onRemove: Function,
  onCheck: Function
}

const TodoItem = ({todo, id, onRemove, onCheck}: todoProps) => {
    const handleCheck = (id: number) => {
      onCheck(id);
    }
    const handleDelete = (id: number) => {
      onRemove(id);
    }
    return (
        <Container>
            <CheckBtn onClick={() => handleCheck(id)}>
                {todo.checked ? <BiCheckSquare /> : <BiSquare />}
            </CheckBtn>
            <Context 
            style={{
                textDecorationLine: todo.checked ? "line-through" : "none",
                color: todo.checked ? "#a5a5a5" : "white"}}>
                {todo.content}
            </Context>
            <DeleteBtn onClick={() => handleDelete(id)}>
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