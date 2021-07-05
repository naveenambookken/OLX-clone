import React from "react";

function ErrorState() {
  return (
    <div>
      <div className="emptyState">
        <img src="./Images/errorimg.png" alt="" />
        <p className="title">Something went wrong</p>
        <p className="subtitle">
          We are having some difficulties, please try again.
        </p>
      </div>
    </div>
  );
}

export default ErrorState;
