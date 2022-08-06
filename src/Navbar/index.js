import React from "react";
import "./style.css";
import CodeIcon from '@mui/icons-material/Code';
import AutofpsSelectIcon from '@mui/icons-material/AutofpsSelect';
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

export default function Navbar() {
  const navItems = [
    { name: "Code", icon: <CodeIcon/> },
    { name: "issues", icon: <BugReportOutlinedIcon/> },
    { name: "Pull Requests", icon: <AccountTreeOutlinedIcon/> },
    { name: "Action", icon: <PlayCircleFilledWhiteOutlinedIcon/> },
    { name: "Projects", icon:<MenuBookOutlinedIcon/> },
    { name: "Wiki", icon: <ImportContactsOutlinedIcon/> },
    { name: "Security", icon: <GppGoodOutlinedIcon/> },
    { name: "Insights", icon: <TimelineOutlinedIcon/> },
  ];

  return (
    <div >
      <ul className="ulStyle">
        {navItems.map((item, index) => {
          return (
            <>
            <div className="headingIcon" style={{display:'flex'}}>
            <span className="iconSpanNav" >{item.icon}</span>
              <li className="listStyle">{item.name}</li>
            </div>
            
            </>
          );
        })}
      </ul>
    </div>
  );
}
