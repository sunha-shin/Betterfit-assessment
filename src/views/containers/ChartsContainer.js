import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Chart from "../components/PieChart";
import RangeSliders from "./RangeSlider";
import {distributeNum} from "../../lib/functions";
import {Color, OrdinalNum, Title} from "../../lib/constants";

const Container = styled.div`
  padding: 0 100px;
`;

const ChartsContainer = () => {
    const [rangeSliders, setRangeSliders] = useState({
        first: 50,
        second: 25,
        third: 25,
    });

    const pieChartData = [
        {
            title: Title.Slider1,
            value: rangeSliders.first,
            color: Color.blue,
            key: OrdinalNum.first,
        },
        {
            title: Title.Slider2,
            value: rangeSliders.second,
            color: Color.orange,
            key: OrdinalNum.second,
        },
        {
            title: Title.Slider3,
            value: rangeSliders.third,
            color: Color.black,
            key: OrdinalNum.third,
        },
    ];

    const onChangeCallback = (value, name) => {
        distributeNum(value, name, rangeSliders, setRangeSliders);
    };

    useEffect(() => {

    }, [rangeSliders]);

    return (
        <Container>
            <Chart pieChartData={pieChartData}/>
            <RangeSliders
                defaultValues={rangeSliders}
                onChangeCallback={onChangeCallback}
            />
        </Container>
    )
}

export default ChartsContainer;