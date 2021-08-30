import React from 'react'
import styled from 'styled-components';
import {BetterfitLogo} from "../../lib/image";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 80px;
    height: auto;
  }

  margin: 0 50px;
`;

const HeaderContents = styled.div`
  font-size: 50px;
`;

const Header = () => {
    return (
        <Container>
            <Logo>
                <BetterfitLogo/>
            </Logo>
            <HeaderContents>
                Betterfit assessment - Sunha Shin
            </HeaderContents>
        </Container>
    )
}

export default Header;