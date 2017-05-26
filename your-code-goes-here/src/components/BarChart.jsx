import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let labels = [];
    let data = [];
    this.props.items.forEach((item) => {
      labels.push(item.name);
      data.push(item.stockCount);
    });
    console.log('barchartdata', data);
    const barAvgData = {
      labels: labels,
      datasets: [
        {
          label: 'Item Stock',
          backgroundColor: 'rgba(67, 176, 42, 1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0, 121, 63, 1)',
          data: data
        }
      ]
    };

    const options = {
      maintainAspectRatio: false,
      responsive: true,
      scales: {
        xAxes: [{
          display: true,
          gridLines: {
            display: false
          },
          labels: {
            show: true
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            min: 0,
          }
        }]
      }
    };

    return (
      <div>
        <Bar
          data={barAvgData}
          width={100}
          height={200}
          options={options}
        />
      </div>
    );
  }
}
