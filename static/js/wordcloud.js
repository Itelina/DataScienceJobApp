var fill = d3.scale.category20();

var width = 520
var height = 230
var widthscaling = 1.75
var heightscaling = 1.75

var layout1 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic0)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 1: Business Analytics")
    .attr("x", 120)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster1';
  });

});

layout1.start();

var layout2 = d3.layout.cloud()
  .size([width, height])
  .words(data.topic1)
  .padding(1)
  .fontSize(function(d) { return d.size*1000; })
  .rotate(function () {return  5; })
  .on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 2: Health Research")
    .attr("x", 145)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster2';
  });

});

layout2.start();

var layout3 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic2)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  3; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 3: Statistical Analyses")
    .attr("x", 145)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster3';
  });

});

layout3.start();

var layout4 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic3)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 4: Machine Learning")
    .attr("x", 145)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster4';
  });

});

layout4.start();

var layout5 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic4)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 5: Insurance Modeling")
    .attr("x", 120)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster5';
  });

});

layout5.start();

var layout6 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic5)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 6: Engineering Technology")
    .attr("x", 140)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster6';
  });
});

layout6.start();

var layout7 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic6)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 7: Equal Opportunity")
    .attr("x", 140)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster7';
  });
});

layout7.start();

var layout8 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic7)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 8: Scientific Research")
    .attr("x", 140)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster8';
  });
});

layout8.start();

var layout9 = d3.layout.cloud()
	.size([width, height])
	.words(data.topic8)
	.padding(1)
	.fontSize(function(d) { return d.size*1000; })
	.rotate(function () {return  5; })
	.on("end", 

function draw(words) {
  var cloud = d3.select("#section").append("svg")
      .attr("width", layout1.size()[0])
      .attr("height", layout1.size()[1]);

  cloud.append("g")
      .attr("transform", "translate(" + width / widthscaling + "," + height / heightscaling + ")")
    .selectAll("text")
      .data(words)
    .enter().append("text")
      .attr("class", "cloudword")
      .style("font-size", function(d) { return d.size*2+ "px"; })
      .style("font-family", "Impact")
      .style("fill", function(d, i) { return fill(i); })
      .attr("text-anchor", "middle")
      .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
      })
      .text(function(d) { return d.text; });

  var hoverg = cloud.append("g");
  
  var hovertext = hoverg.append("text")
    .text("Topic 9: Consulting Services")
    .attr("x", 140)
    .attr("y", 140)
    .attr("fill", "#034e7b")
    .style("font-size", "26px")
    .style("font-weight", "bold")
    .style('opacity', "0");

  var hoverrect = hoverg.append("rect")
    .attr("x", 100)
    .attr("y", 35)
    .attr("rx", 70)
    .attr("ry", 70)
    .attr("width", 400)
    .attr("height", 195)
    .style('fill', "#deebf7")
    .style('opacity', "0")
    .style("stroke", "#3182bd")
    .style("stroke-width", 4);

  hoverrect.on("mouseover", function () {
      hoverrect
      .style("opacity", "0.3")
      .style("cursor", "pointer");
      hovertext
      .style("opacity", "1");
      cloud.selectAll(".cloudword")
      .style("opacity", "0.3");
//      .style("fill", "pink")
    })
  .on("mouseout", function () {
      hoverrect
      .style("opacity", "0");
      hovertext
      .style("opacity", "0");
      cloud.selectAll(".cloudword")
      .style("opacity", "1");//      .style("fill", "pink")
    });

  hoverrect.on("click", function () {
    window.location.href='/cluster9';
  });
});

layout9.start();