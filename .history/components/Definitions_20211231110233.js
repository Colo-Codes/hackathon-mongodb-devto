import React from "react";
import Definition from "./Product";

const Definitions = ({ definitions }) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {definitions.map((definition) => (
                <Definition key={definition._id} definition={definition} />
            ))}
        </div>
    );
};

export default Definitions;