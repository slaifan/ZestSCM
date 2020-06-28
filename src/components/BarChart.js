import React, { Component } from 'react';
import Chart from 'react-apexcharts';


const BACKGROUND_COLOR = "#cccccc";
const dates = ["January","February","March","April","May","June","July", "August", "September", "October", "November", "December"];

class BarChart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
                options: {
                    grid: {
                        xaxis: {
                            lines: {
                                show: true
                              }
                        },
                        yaxis: {
                            lines: {
                              show: false
                            }
                        },
                    },
                    plotOptions: {
                        bar: {
                            horizontal: true
                        }
                    },
                    chart: {
                        id: "basic-bar"
                    },
                    xaxis: {
                        categories: ['eggs', 'flour', 'sugar', 'milk', 'chocolate', 'apples', 'bananas'],
                        labels: {
                            formatter: function(value, timestamp, index) {
                                return dates[value % 12 - 1];
                              }
                        }
                    },
                },
                series: [
                {
                    name: "Stock",
                    data: [13, 4, 4, 5, 4, 3, 2]
                }
                ]
          };
        }
    
    render() {
    return (
        <div className="BarChart">
        <Chart options={this.state.options} series={this.state.series} type="bar" width="900" />
        </div>
    );
    }
}
    

export default BarChart;


//// TODO:
// HAVE THE DATE BE DYNAMIC AND ALL ARE DISPLAYED
// VERTICAL BAR ON HOVER
// ONCLICK HOVER BAR DISPLAY STACKED RED BARS
// REMOVE DATA LABELS?