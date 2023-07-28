<ReferenceLine x={targetValue} stroke="red" label={`Target (${targetValue})`} />

import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const App = () => {
  const heatmapRef = useRef(null);

  useEffect(() => {
    // Data for the heatmap
    const data = [
      { date: new Date(2023, 0, 1), count: 10 },
      { date: new Date(2023, 0, 2), count: 20 },
      { date: new Date(2023, 0, 3), count: 30 },
      // Add more data...
    ];

    // Dimensions of the heatmap
    const width = 800;
    const height = 400;
    const cellSize = 15;
    const padding = 50;

    // Get the minimum and maximum dates from the data
    const minDate = d3.min(data, (d) => d.date);
    const maxDate = d3.max(data, (d) => d.date);

    // Generate an array of all months between the minDate and maxDate
    const allMonths = d3.timeMonths(
      d3.timeMonth.floor(minDate),
      d3.timeMonth.ceil(maxDate)
    );

    // Group the data by month
    const dataByMonth = d3.groups(data, (d) => d.date.getMonth());

    // Create a scale for the color of the heatmap
    const colorScale = d3
      .scaleSequential()
      .domain([0, d3.max(data, (d) => d.count)])
      .interpolator(d3.interpolateGreens);

    // Create the SVG container
    const svg = d3
      .select(heatmapRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Create the heatmap cells
    const cells = svg
      .selectAll(".cell")
      .data(dataByMonth)
      .enter()
      .append("g")
      .attr("class", "month-group")
      .selectAll(".cell")
      .data((d) => d[1])
      .enter()
      .append("rect")
      .attr("class", "cell")
      .attr(
        "x",
        (d, i) =>
          d3.timeWeek.count(d3.timeYear(d.date), d.date) * cellSize + padding
      )
      .attr("y", (d) => d.date.getDay() * cellSize + padding)
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("fill", (d) => colorScale(d.count))
      .on("click", (event, d) => {
        // Create and update the tooltip on cell click
        const tooltip = d3.select(".tooltip");
        tooltip
          .style("display", "block")
          .style("left", event.pageX + "px")
          .style("top", event.pageY + "px")
          .html(`Date: ${d.date.toDateString()}<br/>Count: ${d.count}`);
      });

    // Create and append the tooltip container
    const tooltip = d3
      .select(heatmapRef.current)
      .append("div")
      .attr("class", "tooltip")
      .style("display", "none");
  }, []);

  return <div ref={heatmapRef}></div>;
};

export default App;


 const uniqueMonths = [];
  const monthSet = new Set();
  allMonths.forEach((month) => {
    const monthName = d3.timeFormat("%b")(month);
    if (!monthSet.has(monthName)) {
      monthSet.add(monthName);
      uniqueMonths.push(month);
    }
  });



 // Create a scale for the color of the heatmap
  const colorScale = d3
    .scaleSequential()
    .domain([1, d3.max(heatmapData, (d) => d.count)])
    .interpolator((t) => (d) => d.count === 0 ? "#ffffff" : interpolateGreens(t * 0.7));



heatmapData.sort((a, b) => a.date - b.date);



// Custom query to get the count of incidents by week basis
    @Query("SELECT DATE_TRUNC('week', i.date) AS weekStart, SUM(i.count) AS totalCount " +
            "FROM Incident i " +
            "GROUP BY DATE_TRUNC('week', i.date) " +
            "ORDER BY weekStart")
    List<WeeklyIncidentCount> getCountOfIncidentsByWeek();



@Query("SELECT DATE_TRUNC('week', i.date) AS weekStart, SUM(i.count) AS totalCount " +
            "FROM Incident i " +
            "GROUP BY DATE_TRUNC('week', i.date) " +
            "ORDER BY weekStart")
