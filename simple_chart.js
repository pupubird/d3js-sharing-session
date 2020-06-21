let data = [80, 120, 60, 150, 200];
let barHeight = 20;

let bar = d3.select('svg')
    // select all rect
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    // attach attribute for the svg
    .attr('width', function (d) {
        return d;
    })
    .attr('height', barHeight - 1)
    .attr('transform', function (d, i) {
        return "translate(0," + i * barHeight + ")";
    });