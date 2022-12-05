import styled from "styled-components";
import Form from "../components/Form";
import TodoTitle from "../components/Title";

const Join = () => {
    return (
        <Container>
            <TodoTitle title="JOIN PAGE" fontSize="40px"/>
            <Content>
                <Form type="join"/>
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