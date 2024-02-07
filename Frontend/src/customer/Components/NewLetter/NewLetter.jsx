import { Send } from "@mui/icons-material";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 60vh;
  background-color: #dce3ca;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 25px;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 50px;
  }
`;
const Description = styled.div`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
  margin: 1.6rem 5%;
  text-align: center;
  @media only screen and (max-width: 500px) {
    font-size: 17px;
  }
`;
const InputContainer = styled.div`
  height: 7%;
  width: 50%;
  background-color: white;
  display: flex;
`;
const Input = styled.input`
  padding-left: 2%;
  flex: 8;
  size: 100%;
  outline: none;
  border: none;
`;
const Button = styled.button`
  border: none;
  flex: 1;
  background-color: #4d9296;
  color: white;
  cursor: pointer;
  &:hover {
    transform: scale(1);
    background-color: #b6cfb8;
  }
`;

function NewsLetter() {
  return (
    <Container>
      <Title>Subscribe to our NewsLetter</Title>
      <Description>
        and recive upto 300rs discount on your first order
      </Description>
      <InputContainer>
        <Input placeholder="Enter your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
