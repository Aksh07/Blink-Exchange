import React from 'react';
import NVD3Chart from 'react-nvd3';

function generateNumber(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}

function getDatum() {
    let sin = [],
        sin2 = [];
        
    const len =  0 ;
    for (let i = 1; i < 13; i++) {

        let xa;

        switch(i){

            case 1:
                xa = 'Jan'
                break;

            case 2:
                xa = 'Feb'
                break;

            case 3:
                xa = 'Mar'
                break;

            case 4:
                xa = 'Apr'
                break;

            case 5:
                xa = 'May'
                break;

            case 6:
                xa = 'Jun'
                break;

            case 7:
                xa = 'Jul'
                break;

            case 8:
                xa = 'Aug'
                break;

            case 9:
                xa = 'Sep'
                break;

            case 10:
                xa = 'Oct'
                break;

            case 11:
                xa = 'Nov'
                break;

            case 12:
                xa = 'Dec'
                break;

        }

        sin.push({
            'x': xa,
            'y': generateNumber(0, 0)
        });
        sin2.push({
            'x': xa,
            'y': generateNumber(0, 0)
        });
       
    }
    return [
        {
            values: sin,
            key: 'Total Product for Sale',
            color: '#A389D4'
        },
        {
            values: sin2,
            key: 'Total No of sales',
            color: '#1de9b6',
            area: true
        }
    ];
}

class MultiBarChart extends React.Component {

    render() {
        const data = getDatum();
        return <NVD3Chart type="multiBarChart" datum={data} x="x" y="y" height={300} showValues groupSpacing={0.2} />
    }
}

export default MultiBarChart;