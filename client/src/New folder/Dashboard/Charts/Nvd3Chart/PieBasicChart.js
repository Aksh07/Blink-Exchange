import React from 'react';
import NVD3Chart from 'react-nvd3';

const datum = [
    {key: "1", y: Math.ceil(5), color: "#ff8a65"},
    {key: "2", y: Math.ceil(5), color: "#f4c22b"},
    {key: "3", y: Math.ceil(7), color: "#04a9f5"},
    {key: "4", y: Math.ceil(9), color: "#3ebfea"},
    {key: "5", y: Math.ceil(9), color: "#4F5467"},
  
];

class PieBasicChart extends React.Component {

    render() {
        return <NVD3Chart id="chart" height={300} type="pieChart" datum={datum} x="key" y="y"  />
    }
}

export default PieBasicChart;