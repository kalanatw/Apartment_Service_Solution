import React, { useState } from "react";
import "../../App.css";
import { sidebardata } from "./sidebardata";
import "./sidebar.css";
import right from "../images/expand.png";
import left from "../images/depand.png";

function Sidebar() {
  const [isDocked, setIsDocked] = useState(false);

  const toggleDocking = () => {
    setIsDocked(!isDocked);
  };

  return (
    <div className={`Sidebar ${isDocked ? "docked" : ""}`}>
      <div className="toggle-btn" onClick={toggleDocking}>
        <img src={isDocked ? right : left} alt="toggle" />
      </div>
      <ul className={`sidebarlist ${isDocked ? "docked-list" : ""}`}>
        {sidebardata.map((item, key) => (
          <li
            key={key}
            className="row"
            id={window.location.pathname === item.link ? "active" : ""}
            onClick={() => {
              // Check if docked and if item.link is present
              if (isDocked && item.link) {
                window.location.pathname = item.link;
              }
            }}
          >
            {item.imageURL && (
              <div id="icon">
                <img src={item.imageURL} alt="profile" />
              </div>
            )}
            {item.icon && (
              <div
                id="icon"
                onClick={() => {
                  // Check if not docked and if item.link is present
                  if (!isDocked && item.link) {
                    window.location.pathname = item.link;
                  } else {
                    // Expand sidebar when icon is clicked
                    toggleDocking();
                  }
                }}
              >
                {item.icon}
              </div>
            )}
            <div id="title">{isDocked ? "" : item.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
