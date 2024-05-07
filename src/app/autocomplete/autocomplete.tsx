"use client";
import React, { useState } from "react";

const cityNames = [
  "Amsterdam",
  "Berlin",
  "London",
  "New York",
  "Paris",
  "Rome",
  "San Francisco",
  "Tokyo",
  "Washington DC",
  "Zurich",
  "Copenhagen",
  "Helsinki",
  "Madrid",
  "Reykjavik",
  "Stockholm",
  "Vancouver",
  "Vienna",
  "Zagreb",
  "Budapest",
  "Dublin",
  "Hamburg",
  "Krakow",
  "Lisbon",
  "Ljubljana",
];
function AutoComplete() {
  const [data] = useState(cityNames);
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState<any>([]);

  const handleChange = (e: any) => {
    const filtered = data.filter((value) => {
      return value.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilter(filtered);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center m-auto h-full">
        <input
          type="text"
          className="text-red-700"
          onChange={handleChange}
          onFocus={() => {
            setShow(true);
          }}
        />
        {show &&
          filter.map((ele: string, idx: number) => (
            <ul key={idx}>
              <li>{ele}</li>
            </ul>
          ))}
      </div>
    </>
  );
}

export default AutoComplete;
