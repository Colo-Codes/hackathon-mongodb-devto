import React from "react";

const Spinner = ({ isQuerying }) => (
    isQuerying &&
    <div className="flex justify-center items-center">
        <div className="bg-green-200 text-green-700 m-20 p-10 border-2 border-dotted rounded-lg" role="status">
            <span>Querying MongoDB...</span>
        </div>
    </div>
);

export default Spinner;