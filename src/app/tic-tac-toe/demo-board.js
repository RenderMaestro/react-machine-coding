"use client";

import React, { useState } from "react";

function DemoBoard() {
  const [data, setData] = useState(Array(8).fill(null));
  const nextPlayer = data.filter(Boolean).length % 2 === 0 ? "X" : "O";

  const Row = (id) => {
    return (
      <div className="column" onClick={() => handleGame(id)}>
        {data[id.id]}
      </div>
    );
  };

  const handleGame = (id) => {
    const temp = [...data];
    temp[id.id] = nextPlayer;
    setData(temp);
    // setData((prev) => [...prev, prev[id]]);
    // console.log("game");
  };

  return (
    <>
      <h1>tic tac toe</h1>
      <div className="board">
        <div className="row">
          <Row id="1" />
          <Row id="2" />
          <Row id="3" />
        </div>

        <div className="row">
          <Row id="4" />
          <Row id="5" />
          <Row id="6" />
        </div>

        <div className="row">
          <Row id="7" />
          <Row id="8" />
          <Row id="9" />
        </div>
      </div>
    </>
  );
}

export default DemoBoard;
