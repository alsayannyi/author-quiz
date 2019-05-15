import React from "react";

const Book = ({ title, highlight, onClick }) => {
  function highlightToBgColor(highlight) {
    const mapping = {
      none: "",
      correct: "#28a745" || "alert-success",
      wrong: "#dc3545" || "alert-danger"
    };
    return mapping[highlight];
  }

  return (
    <div
      className="answer alert alert-info"
      style={{ backgroundColor: highlightToBgColor(highlight), color: "#555" }}
      onClick={() => {
        onClick(title);
      }}
    >
      <h4>{title}</h4>
    </div>
  );
};

export default Book;
