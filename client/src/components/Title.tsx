// Title 컴포넌트 
// 변수로 title과 fontSize를 받아서 유동적으로 설정되게 함
import styled from "styled-components";

type TitleProps = {
    title: string,
    fontSize: string
}

const TodoTitle = (props: TitleProps) => {
    return (
        <Header>
          <Title style={{fontSize: props.fontSize}}>
            {props.title}
          </Title>
        </Header>
    )
}

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 260px;
`;

const Title = styled.div`
  padding : 30px 80px;
  background-color: white;
  border: 1px solid #c8c7ea;
  border-radius: 30px;
  font-weight: 600;
`;

export default TodoTitle;