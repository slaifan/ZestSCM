import React, { Component } from 'react';
import * as d3 from 'd3';


const BACKGROUND_COLOR = "#cccccc";

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    drawChart() {
        const{data, w, h, c} = this.props;

        const refAccess = d3.select(this.myRef.current)
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .style("background-color", BACKGROUND_COLOR)
            .style("padding", 10);

        refAccess.selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("y", (d,i) => i * 70)
            .attr("x", (d,i) => w-10 * d)
            .attr("height", h/10)
            .attr("width", (d,i) => w * 50)
            .attr("fill", c)
    }

    componentDidMount() {
        this.drawChart();
    }

    render() {
        return <div><div ref={this.myRef}></div></div>
    }
}

export default BarChart;