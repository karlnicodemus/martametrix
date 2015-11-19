dataset = [];

d3.csv("districtData.csv", function(d) {
    //console.log(d);
    
    /* This loads all the data drom the csv File and stores the useful data we need into a variable
    * named transportData
    */
    
    var transportData = d.map(function(e) {
        var result = {
            name: e["MARTA STOP"],
            driveAlone: parseFloat(e["DRIVE ALONE"]),
            carpool: parseFloat(e["CARPOOL"]),
            bus: parseFloat(e["BUS"]),
            marta: parseFloat(e["MARTA"]),
            bike: parseFloat(e["BIKE"]),
            walk: parseFloat(e["WALK"])
        };
        return result;
    });
    //console.log("Total Data", transportData);
    
    
    //This variable should change on click. This is the index and a click will change this to show different data
    var n = 2;
    
    //Moves the data into objects to be shown the the bar graph. Then we push it onto the array called dataset.
    

    
    var DRIVEALONE = {
    text: "Drive Alone",
    data: transportData[n].driveAlone
    }
    var CARPOOL = {
    text: "Carpool",
    data: transportData[n].carpool
    }
    var BUS = {
    text: "Bus",
    data: transportData[n].bus
    }
    var MARTA = {
    text: "Marta",
    data: transportData[n].marta
    }
    var BIKE = {
    text: "Bike",
    data: transportData[n].bike
    }
    var WALK = {
    text: "Walk",
    data: transportData[n].walk
    }
    
    
    dataset.push(DRIVEALONE, CARPOOL, BUS, MARTA, BIKE, WALK);
    //console.log("Dataset", dataset);
    
    //This is the actual D3 Formatting of the chart
        console.log("Dataset", dataset);
        var margin = {top: 50, right: 50, left: 50, bottom:50};

        var width = 500 - margin.right - margin.left,
            height = 300 - margin.top - margin.bottom;


        var xScale = d3.scale.linear()
            .domain([0, d3.max(dataset)])
            .range([0, width]);

        var yScale = d3.scale.ordinal()
            .domain(d3.range(0, dataset.length))
            .rangeBands([0, height], .1);
    
        var chartContainer = d3.select("#transportationClass")
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom);
            //.style('background', '#4FFFFF');
        
        var chart = chartContainer.selectAll('rect')
            .data(dataset)
            .enter().append('rect')
            .attr('fill', '#CC0000')
            .attr('x', margin.left + 55)
            .attr('y', function(d,i) {
                return yScale(i) + margin.top;
            })
            .attr('width', function(d) {
                console.log( xScale());
                console.log("Before this is read", d.data);
                return d.data * 5;
            })
            .attr('height', yScale.rangeBand());

        //Text inclusions

          chartContainer.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function(d) {
                return d.text;
            })
            .attr("x", function(d, i) {
            return margin.left - 50;
           })
           .attr("y", function(d, i) {
                return yScale(i) + margin.top + 20;
            });
        chartContainer.selectAll('text')
            .data(dataset)
            .enter()
            .append('text')
            .text(function(d) {
                return d.text;
            })
            .attr("x", 50)
            .attr("y", 50)

});

    
