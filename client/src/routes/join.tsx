// "/join" 일 때 보여질 화면
// TodoTitle 컴포넌트와 Content 내의 회원가입 폼으로 구성됨
import styled from "styled-components";
import JoinForm from "../components/JoinForm";
import TodoTitle from "../components/Title";

const Join = () => {
    return (
        <Container>
            <TodoTitle title="JOIN PAGE" fontSize="40px"/>
            <Content>
                <JoinForm />
            </Content>
        </Container>
    );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Join;