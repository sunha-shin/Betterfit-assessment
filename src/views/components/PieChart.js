import React from 'react'
import styled from 'styled-components';
import {PieChart as ReactPieChart} from "react-minimal-pie-chart";
import {Color} from "../../lib/constants";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
`;

const Content = styled.div`
  width: 450px;
`;

const PieChart = ({pieChartData}) => {

    const roundNumber = (number) => Math.round(number * 100) / 100;

    return (
        <Container>
            <Content>
                <ReactPieChart
                    className="chart"
                    animate
                    animationDuration={500}
                    animationEasing="ease-out"
                    startAgnle={0}
                    data={pieChartData}
                    label={(data) => {
                        return `${data.dataEntry.title}: 
                                ${roundNumber(data.dataEntry.value)}%`;
                    }}
                    labelPosition={65}
                    labelStyle={{
                        fontSize: "5px",
                        fill: Color.lightgray,
                        fontWeight: "400"
                    }}
                />
            </Content>
        </Container>
    )
}

export default PieChart;