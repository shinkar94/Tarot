import React from 'react';
import {ProgrammeHed} from "./ProgrammeHed/ProgrammeHed";
import {ProgrammeBody} from "./ProgrammeBody/ProgrammeBody";


export const Programme = () => {
    return (
        <div className="programme" id="link-program">
            <ProgrammeHed />
            <ProgrammeBody />
        </div>
    );
};
