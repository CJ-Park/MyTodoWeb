import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import JoinForm from "../components/JoinForm";
import TodoTitle from "../components/Title";

const Join = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();
    const isLogin = cookies.get("loggedIn")
  
    useEffect(() => {
      if(isLogin) {
        navigate("/todo");
      }
    }, [])

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