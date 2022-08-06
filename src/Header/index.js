import React from "react";
import Navbar from "../Navbar";
import "./style.css";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ForkLeftOutlinedIcon from "@mui/icons-material/ForkLeftOutlined";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";

export default function Header() {
  const listContain = [
    { name: "Notifications", icon: <NotificationsNoneOutlinedIcon /> },
    { name: "Stars", icon: <StarBorderOutlinedIcon /> },
    { name: "Forks", icon: <ForkLeftOutlinedIcon /> },
  ];
  return (
    <div className="masterDiv">
      <div className="toplefthead" style={{ padding: "22px" }}>
        <span className="iconSpanNav">
          <SummarizeOutlinedIcon />
        </span>{" "}
        facebook <span style={{ color: "black" }}>/</span>
        <span style={{ fontWeight: "600", marginLeft: "9px" }}>react</span>
      </div>
      <div>
        <ul className="listDiv">
          {listContain.map((item, index) => {
            return (
              <>
                <li className="listDesign iconAlign">
                  {" "}
                  <span className="iconAlign iconSpanNav">{item.icon}</span>
                  {item.name}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
