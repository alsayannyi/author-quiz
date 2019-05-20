import React from "react";

const Continue = ({ show, onContinue }) => {
  return (
    <div className="row">
      {show ? (
        <div className="col-sm-11">
          <button
            className="btn btn-primary btn-lg float-right"
            onClick={onContinue}
          >
            Continue
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Continue;
