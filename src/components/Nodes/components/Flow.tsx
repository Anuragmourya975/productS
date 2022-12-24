import { useCallback, useState, useMemo, useEffect } from "react";
import ReactFlow, {
    Node,
    Background,
    Edge,
    Connection,
    useNodesState,
    useEdgesState,
    MarkerType,
    useViewport,
    MiniMap,
    useReactFlow,
    Controls,
    addEdge,
    Panel,
} from "reactflow";

// import Modal from "./Modal";

import Modal from "./Modal";
import { ContextMenu } from "./ContextMenu";
import CustomNode from "./CustomNode";
import FloatingEdge from "./FloatingEdge";
import CustomConnectionLine from "./CustomConnectionLine";
// import { ContextMenu } from "./ContextMenu";
import "../style.css";
import "reactflow/dist/style.css";
import EdgeModal from "./EdgeModal";
// import EdgeModal from "./EdgeModal";


const initialNodes = [
    {
        id: "root",
        type: "CustomNode",
        data: { label: "hello world" },
        edgeTypes: "FloatingEdge",
        position: {
            x: 150,
            y: 400,
        },
    },
    {
        id: "root1",
        type: "CustomNode",
        data: { label: "hello world" },
        edgeTypes: "FloatingEdge",
        position: { x: 850, y: 400 },
    },
    {
        id: "root2",
        type: "CustomNode",
        data: { label: "hello world" },
        edgeTypes: "FloatingEdge",
        position: { x: 1550, y: 150 },
    },
    {
        id: "root3",
        type: "CustomNode",
        data: { label: "hello world" },
        edgeTypes: "FloatingEdge",
        position: { x: 1550, y: 650 },
    },
]; //Initial Nodes which are showing by default on the screen

const initialEdges = [
    {
        id: "e1-2",
        source: "root",
        target: "root1",
        animated: true,
        style: { stroke: "#fff", strokeWidth: "3" },
    },
    {
        id: "e2a-3",
        source: "root1",
        target: "root2",
        sourceHandle: "a",
        animated: true,
        style: { stroke: "#fff", strokeWidth: "3" },
    },
    {
        id: "e2b-4",
        source: "root1",
        target: "root3",
        sourceHandle: "b",
        animated: true,
        style: { stroke: "#fff", strokeWidth: "3" },
    },
]; //Initial Edges which are showing on the screen by default on the screen
const connectionLineStyle = {
    strokeWidth: 3,
    stroke: "white",
}; // Used to create a line to connect one node to another while dragging (ref:https://reactflow.dev/docs/examples/nodes/easy-connect/)


const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: "white" },
    type: "floating",
    markerEnd: {
        type: MarkerType.ArrowClosed,
        color: "white",
    },
}; // Default Styling for our customEdges
let nodeId = 0;

// const nodeTypes = {
//     custom: CustomNode
// };
const proOptions = { hideAttribution: true };

const Flow = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [nodeData, setnodeData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [edgeModal, setEdgeModal] = useState(false)
    const handleEdgeClose = () => setEdgeModal(false)
    const handleClose = () => setShowModal(false);

    const { setViewport } = useReactFlow();
    useEffect(
        () => {
            setViewport({ x: 0, y: 0, zoom: 0.7 }); // used to set the viewport of the panel

        },
        [setViewport],
    )

    const createNew = () => {
        const id = `${++nodeId}`;

        const newNode = {
            id,
            type: "CustomNode",
            data: "hello world",
            edgeTypes: "FloatingEdge",
            position: {
                x: 300 + Math.random() * 50,
                y: 300 + Math.random() * 50,
            },
        };
        setNodes((es: any) => es.concat(newNode));
    }; // create node onClick from the modal menu

    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
    );

    const onContextMenu = (e: any) => {
        e.preventDefault();
        setPosition({ x: e.clientX, y: e.clientY });
        setIsOpen(true);
    }; // opens the menu when we right click on the node

    const onNodeMouse = useCallback((event: any, element: any) => {
        setnodeData(element);
        event.preventDefault();
    }, []); //Selects the particular node when we hover over the any specific node

    const onEdge = useCallback((event: any, element: any) => {
        // setnodeData(element);
        alert("Hello world")
        // event.preventDefault();
    }, []); //Selects the particular node when we hover over the any specific node
    const deleteNode = (id: any) => {
        if (nodeData == null) {
            if (id == null) {
                return;
            }
            setNodes((nodes: any) => nodes.filter((node: any) => node.id !== id));

            return;
        }
        setNodes((nodes: any) => nodes.filter((node: any) => node.id !== nodeData['id']));

        setIsOpen(false);
    }; // for deleting the node onClick with context menu or when clicking on cross sign on node

    // const edgeTypes = {
    //     floating: FloatingEdge, //Custom edges for custom nodes imported above
    // };
    const nodeTypes = useMemo(
        () => ({
            CustomNode: (props: any) => <CustomNode deleteNode={deleteNode}  {...props} />,
        }),
        []
    ); // it memoized the component and renders only when it sees some changes in its dependencies
    const edgeTypes = useMemo(
        () => ({
            floating: (props: any) => <FloatingEdge setEdgeModal={setEdgeModal} {...props} />,
        }),
        []
    ); // it memoized the component and renders only when it sees some changes in its dependencies
    return (
        <>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                defaultEdgeOptions={defaultEdgeOptions}
                proOptions={proOptions}
                onNodeMouseEnter={onNodeMouse}
                onEdgeClick={onContextMenu}
                onNodeContextMenu={onContextMenu}
                connectionLineComponent={CustomConnectionLine as any}
                connectionLineStyle={connectionLineStyle}



            >
                <Panel position="top-left" >
                    <button
                        className="relative inline-flex items-center justify-center rounded-full mt-5 p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-red-500 to-red-600 group-hover:from-red-500 group-hover:to-red-400 hover:text-white dark:text-white "
                        onClick={() => setShowModal(true)}
                    >
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
                            <i className="bi bi-door-open"></i>
                            &nbsp; Expand
                        </span>
                    </button>

                    <Modal
                        onClose={handleClose}
                        visible={showModal}
                        createNew={createNew}
                    />
                    <EdgeModal
                        // onClose={handleClose}
                        handleEdgeClose={handleEdgeClose}
                        edgeModal={edgeModal}
                        createNew={createNew}
                    />
                </Panel>
                <ContextMenu
                    isOpen={isOpen}
                    position={position}
                    onMouseLeave={() => setIsOpen(false)}
                    actions={[{ label: "Delete", effect: deleteNode }]}
                />
                <MiniMap className="bg-bc invert" />
                <Controls
                    className=" bg-bc text-white -z-10 "
                    style={{ filter: "invert(1)" }}
                />
                {/* <Background /> */}
            </ReactFlow>
        </>
    );
};

export default Flow;
