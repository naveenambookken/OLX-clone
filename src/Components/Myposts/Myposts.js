import React, { useState } from "react";
import "./Myposts.css";
import MyadPosts from "./MyadPosts";
import MyfavPosts from "./MyfavPosts";

function Myposts() {
  const [isadsSelected, setIsadsSelected] = useState(true);
  const [isfavSelected, setIsfavSelected] = useState(false);
  return (
    <div className="mypostParentDiv">
      <div className="heading-navbar">
        <span>
          <a
            onClick={() => {
              setIsadsSelected(true);
              setIsfavSelected(false);
            }}
            className={isadsSelected ? "borderbottom" : ""}
          >
            ADS
          </a>
        </span>
        <span>
          <a
            onClick={() => {
              setIsadsSelected(false);
              setIsfavSelected(true);
            }}
            className={isfavSelected ? "borderbottom" : ""}
          >
            FAVOURITES
          </a>
        </span>
      </div>
      {isadsSelected && <MyadPosts />}
      {isfavSelected && <MyfavPosts />}
    </div>
  );
}

export default Myposts;
