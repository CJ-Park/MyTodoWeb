import React, { useRef } from "react";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../api/Api";

type loginType = {
  login: Function,
}

const LoginForm = ({login}: loginType) => {
    const navigate = useNavigate();
    const loginRef = useRef<HTMLFormElement>(null);

    const loginHandler = async (e: React.FormEvent) => {
      e.preventDefault();

      try {
        await Api.login({
          username: loginRef.current?.['username'].value,
          password: loginRef.current?.['password'].value
        })
        login();
        navigate("/todo");
      } catch (err) {
        console.log(err);
        alert("로그인 실패");
      }
    }
    return (
        <Form ref={loginRef} onSubmit={loginHandler}  autoComplete="off">
            <IdRow>
                <AiOutlineUser />
                <IdInput type="text" name="username" placeholder="아이디" />
            </IdRow>
            <PwRow>
                <AiOutlineLock />
                <PwInput type="password" name="password" placeholder="비밀번호" />
            </PwRow>
            <LoginBtn type="submit">로그인</LoginBtn>
        </Form>
    );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 230px;
`

const Input = styled.input`
  color: white;
  background-color: #262626;
  width: 100%;
  padding: 12px 15px 10px 10px;
  border: none;
  font-size: 16px;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #a5a5a5;
  }
`;
const IdInput = styled(Input)``;
const PwInput = styled(Input)``;

const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  width: 90%;
  height: 10%;
  padding: 14px 17px 13px;
  border: 1px solid #727272;
  color: #727272;
  box-shadow: 0 2px 6px 0 #7272728c;
  &:focus-within {
    color: white;
    border: 1px solid white;
  }
`;

const IdRow = styled(Row)`
  border-radius: 6px 6px 0 0;
`;

const PwRow = styled(Row)``;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 22px;
  width: 414px;
  height: 52px;
  padding: 14px 17px 13px;
  border: 1px solid #727272;
  color: #727272;
  box-shadow: 0 2px 6px 0 #7272728c;
  &: hover {
    cursor: pointer
  }
`;

const LoginBtn = styled(Button)`
  justify-content: center;
  border-radius: 0 0 6px 6px;
  color: black;
  background-color: white;
`;

export default LoginForm;