import { Call, Facebook, Google, WhatsApp } from "@mui/icons-material";
import React from "react";
import { Email, Instagram, Map } from "mdi-material-ui";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  background-color: #b6cfb8;
  height: fit-content;
`;
const Left = styled.div`
  flex: 1;
  padding-top: 20px;
  padding-left: 40px;
`;
const Logo = styled.h1`
  font-size: 30px;
  font-width: 900;
`;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcons = styled.a`
  text-decoration: none;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #${(props) => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 4px #${(props) => props.color});
  }
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContectItem = styled.p`
  margin-bottom: 20px;
  display: flex;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>MyShop.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          possimus, dolor placeat voluptate ipsam delectus repellendus, laborum
          sunt ratione id obcaecati repudiandae, adipisci nihil fugit autem
          dignissimos quo! Officia, corporis?
        </Description>
        <SocialContainer>
          <SocialIcons
            color="3b5998"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <Facebook />
          </SocialIcons>
          <SocialIcons
            color="bc2a8d"
            href="https://www.instagram.com/"
            target="_blank"
          >
            <Instagram />
          </SocialIcons>
          <SocialIcons
            color="075e54"
            href="https://www.whatsapp.com/"
            target="_blank"
          >
            <WhatsApp />
          </SocialIcons>
          <SocialIcons
            color="4885ed"
            href="https://www.google.com/"
            target="_blank"
          >
            <Google />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Product 1</ListItem>
          <ListItem>Product 2</ListItem>
          <ListItem>Product 3</ListItem>
          <ListItem>Login</ListItem>
          <ListItem>Sign up</ListItem>
          <ListItem>Wish list</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Categorys</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>My Account</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contect Us</Title>
        <ContectItem>
          <Map /> Street: Shop No 16,Palasiya Road, Guljhara,Dhamnod
          <br />
          City: Indore
          <br />
          State/province/area: Madhya Paradesh
          <br />
          Zip code 452001
          <br />
          Country India
        </ContectItem>
        <ContectItem>
          <Call />
          +91 7869603377
        </ContectItem>
        <ContectItem>
          <Email /> vikashsathe83@gmail.com
        </ContectItem>
      </Right>
    </Container>
  );
}

export default Footer;
