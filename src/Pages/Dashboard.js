import React, { useEffect, useState } from "react";
import MapComponent from "./MapComponent";
import TableComponent from "./TableComponent";
import { BiMap } from "react-icons/bi";
import { FaListAlt } from "react-icons/fa";

const Dashboard = () => {
  const [token, setToken] = useState("");

  const [data, setData] = useState("");

  useEffect(() => {
    const sessionToken = JSON.parse(localStorage.getItem("loggedInUser"));
    setToken(sessionToken);

    const board = JSON.parse(localStorage.getItem("dashboard"));

    //user for undefined
    try{
      if (board.length !== 0) {
        setData(board);
        // console.log(board.length)
      }
    }
    catch{}
  }, []);

  const [tab, setTab] = useState(0);

  const handleIndex = (i) => {
    setTab(i);
  };

  return (
    <div>
      {!token ? (
        <h1 className="text-center text-danger">You Did Not logIn</h1>
      ) : !data ? (
        <p className="text-center text-danger fw-bold fs-1">No Data</p>
      ) : (
        //
        <div className="main border border-dark">
          <div className="child1">
            <span
              className={tab === 0 ? "tab1 active1" : "tab1"}
              onClick={() => {
                handleIndex(0);
              }}
            >
              <BiMap />
              Map View
            </span>

            <span
              className={tab === 1 ? "tab1 active1" : "tab1"}
              onClick={() => {
                handleIndex(1);
              }}
            >
              <FaListAlt /> List View
            </span>
          </div>
          <div className="child2">
            <div  style={{display:tab===0?"block":"none"}}><MapComponent data={data}/></div>
            <div style={{display:tab===1?"block":"none"}}><TableComponent data={data}/></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
