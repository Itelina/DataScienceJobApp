var table = d3.select("#lists")
	.append("table")
	.attr('id', 'jobpostings')
    .style("border-collapse", "collapse")
    .style("width", "100%")
    .style("table-layout", "fixed");

var tr = table.selectAll("a")
    .data(data2)
    .enter()
    .append("a")
      .attr("href", function(d) { return d.url; })
      .style("display", "block")
      .style("width", "100%")
    .append("tr")
      .style("display", "block")
      .style("width", "100%")
    .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
    .on("mouseout", function(){d3.select(this).style("background-color", "white")});

tr.append('td')
//	.html(function(d) {return "<a href='" + d.url + "'>" + d.company + "</a>" })
	.html(function(d) {return d.company })
    .style("padding", "10px")
    .style('width', "20%" )
    .style("vlign" ,"middle");

tr.append('td')
	.html(function(d) {return d.position})
    .style("padding", "10px")
    .style('width', "20%" )
    .style("vlign" ,"middle");

tr.append('td')
	.html(function(d) {return d.summary; })
    .style("padding", "10px")
    .style('width', "60%" )
    .style("vlign" ,"top");