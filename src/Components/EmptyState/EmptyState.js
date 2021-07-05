import React from "react";
import './EmptyState.css'
import {useHistory} from 'react-router-dom'
function EmptyState() {
    const history = useHistory()
  return (
    <div>
      <div className="myadsEmptyState">
        <div className="emptyState">
          <img src="./Images/emptyStateimg.png" alt="" />
          <p className="title">You haven't listed anything yet</p>
          <p className="subtitle">Let go of what you don't use anymore</p>
          <div onClick={() => history.push("/create")}>
            <button className="emptyStateBtn">start selling</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyState;
