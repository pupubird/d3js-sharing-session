
// select all the p tag, and attach "style" attribute to the p tag with color:blue;
d3.selectAll("p").style("color", "blue");




// You can also select the body and do the same!
// d3.select("body").style("background-color", "black");





// the power is... you can add it dynamically!
d3.selectAll("p").style("color", function () {
    return "hsl(" + Math.random() * 360 + ",100%,50%)";
});





// it is just a callback function!
d3.selectAll("p").style("color", function (data, index) // params: data, index
{
    return index % 2 ? "black" : "red";
});





// now here comes the super power... adding the data!
d3.selectAll("p")
    .data([4, 8, 15, 16, 23, 42])
    // set the font size based on the data
    .text(function (d) { return "I’m number " + d + "! And I am first created"; })
    // set the font size based on the data
    .style("font-size", function (d) {
        console.log("I am a callback function called on every data " + d)
        return d + "px";
    });





// weird behaviour? only shown the first two data? you need an enter function!
let p = d3.selectAll("p")

p.data([4, 8, 15, 16, 23, 42])
    // it will replace if exists, create if not exists yet
    .enter().append("p")
    .text(function (d) { return "I’m number " + d + "! And I am first created"; })
    // set the font size based on the data
    .style("font-size", function (d) {
        console.log("I am a callback function called on every data " + d)
        return d + "px";
    });





// to update
p.data([102, 112, 122, 132, 142])
    .enter()
    .append("p")
    .text(function (d) { return "I’m number " + d + "!"; })
    // set the font size based on the data
    .style("font-size", function (d) {
        console.log("I am a callback function called on every data " + d)
        return d + "px";
    });