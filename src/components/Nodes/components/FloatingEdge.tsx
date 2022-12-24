import { useCallback, useState } from "react";
import { useStore, getStraightPath, Panel } from "reactflow";

import { getEdgeParams } from "./utils.js";
import "../../../index.css";

type Edge<T = any> = {
    id: string;
    type?: string;
    source: string;
    target: string;
    sourceHandle?: string | null;
    targetHandle?: string | null;

    style?: React.CSSProperties;

    data?: T;
    markerEnd?: string;
    setEdgeModal: (value: boolean | ((prevVar: boolean) => boolean)) => void;    // sourcePosition:any
    // targetPosition:any
};

function FloatingEdge(props: Edge) {
    const sourceNode = useStore(
        useCallback((store) => store.nodeInternals.get(props.source), [props.source])
    );
    const targetNode = useStore(
        useCallback((store) => store.nodeInternals.get(props.target), [props.target])
    );

    if (!sourceNode || !targetNode) {
        return null;
    }

    const { sx, sy, tx, ty } = getEdgeParams(sourceNode, targetNode);

    const [edgePath, labelX, labelY] = getStraightPath({
        sourceX: sx,
        sourceY: sy,
        targetX: tx,
        targetY: ty,
        // sourcePosition: sp,
        // targetPosition: tp,
    });
    const foreignObjectSize = 40;

    // const onEdgeClick = (evt: any, id: any) => {
    //     evt.stopPropagation();
    //     return (
    //         <h1>Hello world</h1>
    //     )
    // };

    return (
        <>

            <path
                id={props.id}
                className="react-flow__edge-path"
                d={edgePath}
                markerEnd={props.markerEnd}
                style={props.style}
            />{" "}
            <foreignObject
                width={foreignObjectSize}
                height={foreignObjectSize}
                x={labelX - foreignObjectSize / 2}
                y={labelY - foreignObjectSize / 2}
                className="edgebutton-foreignobject"
                requiredExtensions="http://www.w3.org/1999/xhtml"
            >
                <div>
                    <button
                        className="edgebutton"
                        style={{ width: "30px", height: "30px" }}
                        // onClick={(event: any) => onEdgeClick(event, props.id)}
                        onClick={(e) => { props.setEdgeModal(true); e.stopPropagation(); }}
                    >
                        <i className="bi bi-door-open text-xl"></i>
                    </button>
                </div>

            </foreignObject>


        </>
    );
}

export default FloatingEdge;
