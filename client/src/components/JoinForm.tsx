import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Api } from "../api/Api";

const JoinForm = () => {
    const navigate = useNavigate();
    const joinRef = useRef<HTMLFormElement>(null);

    const joinHandler = async (e: React.FormEvent) => {
        e.preventDefault();
    
        try {
          await Api.join({
            username: joinRef.current?.['username'].value,
            nickname: joinRef.current?.['nickname'].value,
            password: joinRef.current?.['password'].value
          })
            navigate("/");
            alert("가입 완료");
        } catch (err: any) {
          console.log(err);
          alert("회원 가입 실패");
        }
      }
    
      return (
        <Form ref={joinRef} onSubmit={joinHandler} autoComplete="off">
            <IdRow>
                <IdInput type="text" name="username" placeholder="아이디" />
            </IdRow>
            <NicknameRow>
                <NicknameInput type="text" name="nickname" placeholder="닉네임" />
            </NicknameRow>
            <PwRow>
                <PwInput type="password" name="password" placeholder="비밀번호" />
            </PwRow>
            <JoinBtn type="submit">회원 가입</JoinBtn>
        </Form>
    );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 230px;
`;

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
const NicknameInput = styled(Input)``;

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

const NicknameRow = styled(Row)``;

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

const JoinBtn = styled(Button)`
  justify-content: center;
  border-radius: 0 0 6px 6px;
  color: black;
  background-color: white;
`;

export default JoinForm;