import React from "react";
import styled from "styled-components";
import "rc-slider/assets/index.css";
import {ColorString, OrdinalNum} from "../../lib/constants";
import UserSlider from "../components/UserSlider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 100px
`;

const RangeSliders = ({defaultValues, onChangeCallback}) => {

    return (
        <Container className={"UserSlider"}>
            <UserSlider
                defaultValues={defaultValues}
                onChangeCallback={onChangeCallback}
                ordinalNum={OrdinalNum.first}
                color={ColorString.blue}
            />
            <UserSlider
                defaultValues={defaultValues}
                onChangeCallback={onChangeCallback}
                ordinalNum={OrdinalNum.second}
                color={ColorString.orange}
            />
            <UserSlider
                defaultValues={defaultValues}
                onChangeCallback={onChangeCallback}
                ordinalNum={OrdinalNum.third}
                color={ColorString.black}
            />
        </Container>
    );
};


export default RangeSliders;