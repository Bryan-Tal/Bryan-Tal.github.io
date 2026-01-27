import { pie, select, arc, interpolate, schemeCategory10 } from "d3";
import { useEffect, useRef } from "react";
import useResizeObserver from './useResizeObserver';
// import d3 from "d3";
var width = 200, height = 200;
var radius = Math.min(width,height) / 2



function UseCreateSkillArc({data}) {
    const wrapperRef = useRef();
    const svgRef = useRef();
    const dimensions = useResizeObserver(wrapperRef);
    var color = schemeCategory10;
    useEffect(() => {
        const svg = select(svgRef.current);
        if (!dimensions) return;

        // create the arcs
        var arcGenerator = arc()
        .innerRadius(radius - 60)
        .outerRadius(radius - 20)
        .padAngle(0.02)
        .padRadius(100)
        .cornerRadius(4)

        
        svg.selectAll("svg")
            .attr("id","arcPath")
            .select("path")
            .data(data)
            .join('path')
            .attr("transform",`translate(${width/2},${height/2})`)
            .attr("fill", function(d,i){return color[i];})
            .transition()
                .duration(1000)
                .delay(function(d,i) {return i * 800})
            .attrTween("d", function(d) {
                var i = interpolate(d.startAngle, d.endAngle);
                return function(t) {
                    d.endAngle = i(t);
                    
                  return arcGenerator(d);
                }
             });

            svg
            // .append("textPath")
            .append("text")
            .attr("transform",`translate(${width/2},${height/2})`)
            .attr("id", "#arcPath")
            .style("text-anchor","middle")
            .text(function(d,i){console.log(i);return data[i].name})
            .style("fill","white")
            
            

    },[data, dimensions])
    return ( 
        <div ref={wrapperRef} style={{marginBottom: "1rem"}}>
        <svg ref={svgRef} width={width} height={height}></svg>
    </div>
        );
}
 
export default UseCreateSkillArc;