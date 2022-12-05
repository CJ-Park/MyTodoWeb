import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import styled from "styled-components";

type FormProps = {
    type: string
}

const Form = (props: FormProps) => {
    if(props.type === 'login') {
        return (
            <LoginForm>
                <IdRow>
                    <AiOutlineUser />
                    <IdInput placeholder="아이디" />
                </IdRow>
                <PwRow>
                    <AiOutlineLock />
                    <PwInput type={"password"} placeholder="비밀번호" />
                </PwRow>
                <LoginBtn>로그인</LoginBtn>
            </LoginForm>
        );
    } else {
        return (
            <JoinForm>
                <IdRow>
                    <IdInput placeholder="아이디" />
                </IdRow>
                <NicknameRow>
                    <NicknameInput placeholder="닉네임" />
                </NicknameRow>
                <PwRow>
                    <PwInput type={"password"} placeholder="비밀번호" />
                </PwRow>
                <JoinBtn>회원 가입</JoinBtn>
            </JoinForm>
        );
    }
};

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 230px;
`;

const JoinForm = styled(LoginForm)``;

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
// focus 일 때 border 컬러 바꾸기
const IdRow = styled(Row)`
  border-radius: 6px 6px 0 0;
`;

const PwRow = styled(Row)``;

const NicknameRow = styled(Row)``;

const LoginBtn = styled(Row)`
  justify-content: center;
  border-radius: 0 0 6px 6px;
  color: black;
  background-color: white;
`;

const JoinBtn = styled(LoginBtn)``;

export default Form;