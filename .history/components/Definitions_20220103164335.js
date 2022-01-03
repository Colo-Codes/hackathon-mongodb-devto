import React from "react";
import Definition from "./Definition";

const Definitions = ({ definitions }) => {
    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 my-6 w-full">
            {definitions.map((definition) => {
                console.log('>> definitions', definitions);
                return <Definition key={definition._id} definition={definition} />;
            })}
        </div>
    );
};

export default Definitions;