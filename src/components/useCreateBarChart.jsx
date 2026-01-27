import { useEffect, useRef, useState } from "react";
import useResizeObserver from "./useResizeObserver";
import { max, scaleBand, scaleLinear, select, schemeCategory10 } from "d3";


export function UseCreateBarChart({data}) {
    const wrapperRef = useRef();
    const svgRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has already run

    useEffect(() => {
        // Intersection Observer setup
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true); // Mark as animated
              observer.disconnect(); // Stop observing after first interaction
            }
          },
          { threshold: 0.5 } // Trigger when 50% of the chart is visible
        );
    
        if (wrapperRef.current) {
          observer.observe(wrapperRef.current);
        }
    
        return () => {
          if (wrapperRef.current) {
            observer.unobserve(wrapperRef.current);
          }
        };
      }, [hasAnimated]);

    useEffect(() => {
        const svg = select(svgRef.current);
        if (!hasAnimated || !dimensions) return;

        // // sort the data
        // data.sort((a,b) => b.value - a.value);

        const xScale = scaleLinear()
                        .domain([0, 100])
                        .range([0, dimensions.width])

        const yScale = scaleBand()
                        .paddingInner(0.1)
                        .domain(data.map((value, index) => index))
                        .range([0,dimensions.height])


        // draw the bars
        svg.selectAll(".bar")
            .data(data, (entry, index) => entry.name)
            .join("rect")
            .attr("class","bar")
            .attr("fill", (entry,index) => schemeCategory10[index])
            .attr("x",0)
            .attr("y", (entry,index) => yScale(index))
            .attr("height",yScale.bandwidth())
            .transition()
                .duration(1000)
                .delay(function(d,i) {return i * 800})
            .attr("width", entry => xScale(entry.value))
            

        // draw labels
        svg.selectAll(".label")
            .data(data, (entry, index) => entry.name)
            .join("text")
            .attr("y", (entry,index) => yScale(index) + yScale.bandwidth() / 2)
            .transition()
                .duration(900)
                .delay(function(d,i) {return i * 800})
            .text(entry => `${entry.name}`)
            .attr("class","label")
            .attr("x",10)
            
            .attr("dy","0.32em")

        // svg.selectAll(".label")
        //     .data(data, (entry, index) => entry.name)
        //     .join("text")
        //     .attr("y", (entry,index) => yScale(index) + yScale.bandwidth() / 2)
        //     .transition()
        //         .duration(900)
        //         .delay(function(d,i) {return i * 800})
        //     .text(entry => `${entry.value} / 100`)
        //     .attr("class","label")
        //     .attr("x",entry => entry.value * 1.55)
            
        //     .attr("dy","0.32em")

    },[hasAnimated, data, dimensions])
    return ( 
        <div ref={wrapperRef} style={{
            marginBottom: "2rem",
            border: "1px solid white", // White outline around the container
            borderRadius: "8px", // Optional rounded corners
            padding: "10px", // Padding for better spacing
            background: "black", // Background to contrast the bars
          }}>
        <svg ref={svgRef} style={{ width: "100%", height: dimensions?.height }}></svg>
    </div>
     );
}
 
