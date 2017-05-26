import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   avgEmoji: ''
    // };
    // this.mostFreqEmoji = this.mostFreqEmoji.bind(this);
  }

  // mostFreqEmoji(emojis) {
  //   emojis = emojis.replace('undefined', '');
  //   let emojiStorage = {};
  //   let freqEmojiCounter = 0;

  //   for (let i = 0; i < emojis.length; i += 2) {
  //     let emoji = emojis.substr(i, 2);
  //     isNaN(emojiStorage[emoji]) ? emojiStorage[emoji] = 0 : emojiStorage[emoji]++;
  //     if ( emojiStorage[emoji] > freqEmojiCounter) {
  //       freqEmojiCounter = emojiStorage[emoji];
  //       this.state.avgEmoji = emoji;
  //     }
  //   }
  // }

  render() {
    let labels = [];
    let data = [];
    this.props.items.forEach((item) => {
      // data.push([item.name, item.stockCount]);
      labels.push(item.name);
      data.push(item.stockCount);
    });
    console.log('barchartdata', data);
    // const {avg_data} = this.props;
    // const praseAvgData = JSON.parse(avg_data);
    // let avgChartData = [];

    // for (var emotion in praseAvgData) {
    //   if ( emotion !== 'emoji') {
    //     avgChartData.push( Math.floor(praseAvgData[emotion] * 100));
    //   } else {
    //     let emojis = praseAvgData[emotion];
    //     this.mostFreqEmoji(emojis);
    //   }
    // }

    const barAvgData = {
      labels: labels,
      datasets: [
        {
          label: 'Inventory',
          backgroundColor: 'rgba(67, 176, 42, 1)',
          // borderColor: 'rgba(235, 84, 36, 0.80)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(0, 121, 63, 1)',
          // hoverBorderColor: 'rgba(235, 84, 36, 1)',
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
            // max: 100,
            min: 0,
            // stepSize: 10
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

