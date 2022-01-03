import React from "react";
import Definition from "./Definition";

const Definitions = ({ definitions }) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 mt-6">
            {definitions.map((definition) => (
                <Definition key={definition._id} definition={definition} />
            ))}
        </div>
    );
};

export default Definitions;