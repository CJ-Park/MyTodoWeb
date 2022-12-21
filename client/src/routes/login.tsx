// "/login" 일 때 보여질 화면
// 로그인 창에서는 로그인 여부를 확인해서 로그인 상태면 "/todo"로 redirect 시킴
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
  // 쿠키 정보에서 로그인 여부 판단
  const cookies = new Cookies();
  const isLogin = cookies.get("loggedIn")

  // 로그인 상태면 redirect
  useEffect(() => {
    if(isLogin === true) {
      navigate("/todo");
    }
  }, [])

  // 성공적으로 로그인 시 작동하는 함수 => App.tsx의 login 확인하는 변수 true로 변경
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