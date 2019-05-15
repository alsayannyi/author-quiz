import React from "react";
import Book from "./Book";

const Turn = ({ author, books, highlight, onAnswerSelected }) => {
  debugger;
  return (
    <div className="row turn" style={{ backgroundColor: "white" }}>
      <div className="col-4 offset-1">
        <img
          src={author.imageUrl}
          className="img-fluid authorimage"
          alt="Author"
        />
      </div>
      <div className="col-6">
        {books.map(title => (
          <Book
            title={title}
            key={title}
            highlight={highlight}
            onClick={onAnswerSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default Turn;
