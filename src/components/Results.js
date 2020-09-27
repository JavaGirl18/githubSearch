import React, { useState, useRef, useEffect } from "react";
import "./Results.css";
import image from "../fork.png";

export default function Results({ items }) {
  console.log({ items });
  // const default = './fork.png'

  return (
    <div className="grid">
      {items.map((res, index) => {
        const { avatar_url, login, url, name, full_name, forks } = res;
        return (
          <div className="card">
            <img className="image" src={avatar_url ? avatar_url : image}></img>
            <div className="container">
              <h4>
                <b>{login ? login : full_name}</b>
              </h4>
              <a>
                <p style={{ wordBreak: "break-word" }}>{url}</p>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
