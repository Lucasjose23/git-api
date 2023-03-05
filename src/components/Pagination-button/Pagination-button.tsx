import React from "react";
import "./Pagination-button.css";



function PaginationButton({active}:any) {
  return (
    <div className={active?'bullet bullet--active':'bullet'}
    >
  </div>
  );
}

export default PaginationButton;
