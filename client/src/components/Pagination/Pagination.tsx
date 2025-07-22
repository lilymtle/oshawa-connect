import { useState } from "react";
import "./Pagination.scss";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    prevPage: () => void;
    nextPage: () => void;
}

export default function Pagination({ totalPages, currentPage, prevPage, nextPage }: PaginationProps) {
    const pageNumbers: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
    };
    

    return (
        <div className="pagination">
            <div 
                className="pagination__wrapper"
                onClick={prevPage}
            >
                <img
                    className="pagination__arrow"
                    src="/assets/icons/chevron-left.svg"
                    alt="Left chevron arrow"
                />

                <p 
                    className={`pagination__prev ${currentPage === 1 ? "disabled" : "" }`}
                >
                    Prev
                </p>
            </div>

            <div className="pagination__pages">
                {pageNumbers.map((page) => (
                    <div className={`pagination__circle ${currentPage === page ? "active" : ""}`}>
                        <p 
                            key={page}
                            className="pagination__page-number"
                        >
                            {page}
                        </p>
                    </div>
                ))}
            </div>

            <div 
                className="pagination__wrapper"
                onClick={nextPage}
            >
                <p className="pagination__next">
                    Next
                </p>

                <img
                    className="pagination__arrow"
                    src="/assets/icons/chevron-right.svg"
                    alt="Right chevron arrow"
                />
            </div>
        </div>
    )
}