import React from 'react';

export const Pagination = ({ definitionsPerPage, totalDefinitions }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalDefinitions / definitionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a className="page-link" href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
