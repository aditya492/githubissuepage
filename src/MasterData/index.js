import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import InfiniteScroll from "react-infinite-scroll-component";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import AdjustOutlinedIcon from "@mui/icons-material/AdjustOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Chip } from "@mui/material";
import { get } from "lodash";
import { timeCalculation } from "../config";

let page = 1;
const fetchData = (setData, data) => {
  axios
    .get(`https://api.github.com/repos/facebook/react/issues?page=${page}`)
    .then((res) => {
      setData([...data, ...res.data]);
      page = page + 1;
      console.log("dxxxxx", res.data);
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

export default function MasterData() {
  const [data, setData] = useState([]);

  // content data to show
  const leftContent = [
    {
      name: "625 open",
      icon: <AdjustOutlinedIcon />,
      stylee: { color: "black" },
    },
    { name: "10,435 closed", icon: <CheckOutlinedIcon /> },
  ];
  const rightContent = [
    "Author",
    "Label",
    "Projects",
    "Milestones",
    "Assignee",
    "Sort",
  ];

  // Fetching data fron API
  useEffect(() => {
    fetchData(setData, data);
  }, []);

  const renderData = () => {
    const returnData = data.map((item, index) => {
      const createdAt = get(item, "created_at", "");
      
      const createdDate = new Date(createdAt);
      const currDate = new Date();

      // getting calculated value from function
      const { days, hours, ifmorethanmonth } = timeCalculation(
        createdDate,
        currDate
      );

      const status = get(item, "labels[0].name", "");
      const title = get(item, "title", "");
      const number = get(item, "number", "");
      const userName = get(item, "user.login", "");
      const chipColor = get(item, "labels[0].color", "");
      return (
        <>
          <div className="masterDivTable">
            <div className="dataTablecell">
              <span className="iconCircle">
                <AdjustOutlinedIcon />
              </span>
              <a
                href={item.html_url}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "black",
                  listStyle: "none",
                }}
              >
                <span className="tabletitle">{title}</span>
              </a>
              {status && (
                <span>
                  <Chip
                    size="small"
                    label={status}
                    style={{ backgroundColor: `#${chipColor}` }}
                  />
                </span>
              )}
            </div>
            <div className="dataTablecellStatus">
              {`#${number} updated ${
                days > 31
                  ? "on " + ifmorethanmonth
                  : days
                  ? days + " days ago"
                  : hours + " hours ago"
              }   by ${userName}`}
            </div>
          </div>
        </>
      );
    });

    return returnData;
  };

  return (
    <div className="borderBox">
      <div className="tableHeader">
        <div>
          <ul className="commonContent">
            {leftContent.map((item, index) => {
              return (
                <>
                  <span className="iconspan">{item.icon}</span>
                  <li style={item.stylee} className="commonList">
                    {item.name}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
        <div>
          <ul className="commonContent">
            {rightContent.map((item, index) => {
              return (
                <>
                  <li className="commonList">
                    {item}
                    <span className="arrowdropdown">
                      <ArrowDropDownIcon />
                    </span>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
      <InfiniteScroll
        dataLength={data.length}
        next={() => {
          fetchData(setData, data);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {renderData()}
      </InfiniteScroll>
    </div>
  );
}
