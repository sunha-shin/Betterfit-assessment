import React from 'react'
import styled from 'styled-components';
import Slider from "rc-slider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SliderBox = styled.div`
  margin: 20px;
`;

const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

const UserSlider = ({defaultValues, onChangeCallback, ordinalNum, color}) => {
    return (
        <Container className={"UserSlider"}>
            <SliderBox>
                <Label>Slider1 ({color}) : {defaultValues[ordinalNum]}</Label>
                <Slider
                    defaultValue={defaultValues[ordinalNum]}
                    value={defaultValues[ordinalNum]}
                    id={ordinalNum}
                    min={0}
                    max={100}
                    step={1}
                    onChange={(value) => onChangeCallback(value, ordinalNum)}
                />
            </SliderBox>
        </Container>
    );
};

export default UserSlider;