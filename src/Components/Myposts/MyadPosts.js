import React from "react";
import "./MyadPosts.css";

function MyadPosts() {
  return (
    <div>
      <div className="myadsEmptyState">
        <div className="emptyState">
          <img src="./Images/emptyStateimg.png" alt=""/>
          <p className="title">You haven't listed anything yet</p>
          <p className="subtitle">Let go of what you don't use anymore</p>
          <div>
          <button className="emptyStateBtn">start selling</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyadPosts;
