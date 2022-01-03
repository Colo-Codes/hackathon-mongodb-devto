import React from "react";
import Definition from "./Definition";

const Definitions = ({ definitions }) => {
    return (
        <div className="grid gap-6 grid-cols-1 mt-6">
            {definitions.map((definition) => (
                <Definition key={definition._id} definition={definition} />
            ))}
        </div>
    );
};

export default Definitions;