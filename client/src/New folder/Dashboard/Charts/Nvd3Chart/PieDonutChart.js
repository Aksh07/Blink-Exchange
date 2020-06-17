import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "Electronics", y: 5, color: "#ff8a65"},
    {key: "Books", y: 8, color: "#f4c22b"},
    {key: "Furniture", y: 4, color: "#04a9f5"},
    {key: "Service", y: 8, color: "#3ebfea"},
    {key: "Others", y: 6, color: "#4F5467"},
  
];

class PieDonutChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y" donut labelType='percent' />
    }
}

export default PieDonutChart;