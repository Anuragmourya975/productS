import React from "react";
// import Sidebar from "./Sidebar";
import Form from "./Form";

type ModalProps = {
    visible: boolean
    onClose: () => void
    createNew: () => void
}

function Modal(props: ModalProps) {
    if (!props.visible) return null;
    return (
        // <!-- Main modal -->
        <div
            id="defaultModal"
            tabIndex={-1}
            aria-hidden="true"
            className="fixed bg-opacity-20 backdrop-blur-sm top-0 left-0 right-0 z-50 flex justify-center w-full p-4 overflow-x-hidden overflow-y-auto items-center md:inset-0 h-modal md:h-full"
        >
            <div className="relative w-full h-full max-w-xl md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg border-2 border-white shadow dark:bg-black">
                    {/* <!-- Modal header --> */}
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Add Scene
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal"
                            onClick={props.onClose}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    <Form createNew={props.createNew} />
                </div>
            </div>
        </div>
    );
}

export default Modal;
