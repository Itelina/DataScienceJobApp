nv.addGraph(function() {
    var chart = nv.models.multiBarHorizontalChart()
        .x(function(d) { return d.label })
        .y(function(d) { return d.value * 100 })
        .margin({top: 10, right: 30, bottom: 50, left: 110})
        .barColor(d3.scale.category20b().range())
        .showValues(false)           //Show bar value next to each bar.
        .tooltips(true)             //Show tooltips on hover.
        .showControls(false)
        .showLegend(false);        //Allow user to switch between "Grouped" and "Stacked" mode.

    chart.yAxis
        .tickFormat(d3.format(',.2f'))

    d3.select('#bargraphs svg')
        .datum(data1)
        .call(chart);

    nv.utils.windowResize(chart.update);

    return chart;
  });


