import React from "react";
import styled from "styled-components";
import ChartsContainer from "../containers/ChartsContainer";
import Header from "../components/Header";
import {GlobalStyle} from "../../styled/GlobalStyle";

const Container = styled.div`
  margin: 50px;
`;

const Main = () => {
    return (
        <Container className={"main"}>
            <GlobalStyle/>
            <Header/>
            <ChartsContainer/>
        </Container>
    );
};



export default Main;