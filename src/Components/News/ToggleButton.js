import React from "react";

const ToggleButton = ({ onClick, gridView }) => {
    return (
        <button
            onClick={onClick}
            className="bg-teal-700 font-semibold mb-5 text-white py-2 px-4 rounded hover:bg-teal-900"
        >
            {gridView ? "Switch to List View" : "Switch to Grid View"}
        </button>
    );
};

export default ToggleButton;
