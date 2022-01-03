import React from 'react';

export const Pagination = ({ definitionsPerPage, totalDefinitions }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDefinitions / definitionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>

        </div>
    );
};
