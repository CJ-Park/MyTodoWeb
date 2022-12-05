import styled from "styled-components";
import TodoTitle from "../components/Title";
import Form from "../components/Form";

const Login = () => {
  return (
    <Container>
        <TodoTitle title="To Do List" fontSize="40px"></TodoTitle>
        <Content>
            <Form type="login"/>
            <JoinBtn href="/join">회원가입 &rarr;</JoinBtn>
        </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div`
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JoinBtn = styled.a`
  color: gray;
  text-align: center;
`;
