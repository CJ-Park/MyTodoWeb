import styled from "styled-components";
import TodoTitle from "../components/Title";
import LoginForm from "../components/LoginForm";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type propType = {
  loginStateHandler: Function,
}

const Login = (props: propType) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const isLogin = cookies.get("loggedIn")

  useEffect(() => {
    if(isLogin) {
      navigate("/todo");
    }
  }, [])

  const loginHandler = () => {
    props.loginStateHandler();
  }
  return (
    <Container>
        <TodoTitle title="To Do List" fontSize="40px"></TodoTitle>
        <Content>
            <LoginForm login={loginHandler}/>
            <JoinBtn href="/join">회원가입 &rarr;</JoinBtn>
        </Content>
    </Container>
  );
};

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

export default Login;