import React from "react";
import { getStraightPath } from "reactflow";

type connecitonLine = {
    fromX: number
    fromY: number
    toX: number
    toY: number
    connectionLineStyle: React.CSSProperties
}

function CustomConnectionLine(props: connecitonLine) {
    const [edgePath] = getStraightPath({
        sourceX: props.fromX,
        sourceY: props.fromY,
        targetX: props.toX,
        targetY: props.toY,
    });

    return (
        <>
            <g>
                <path style={props.connectionLineStyle} fill="none" d={edgePath} />
                <circle
                    cx={props.toX}
                    cy={props.toY}
                    fill="black"
                    r={3}
                    stroke="black"
                    strokeWidth={1.5}
                />
            </g>
        </>
    );
}

export default CustomConnectionLine;
