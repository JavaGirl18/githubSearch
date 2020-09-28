import React from "react";
import "./App.css";
import image from "../fork.png";
import { isEmpty } from "lodash";

export default function Results({ items, isUser, isLoading, error }) {
  return (
    <div className="grid">
      {isLoading ? (
        <div>
          {" "}
          <h4>Loading Data...</h4>{" "}
        </div>
      ) : null}
      {!isEmpty(error) ? <h4>{error.error}</h4> : null}
      {items.map((res, index) => {
        const { avatar_url, login, url, forks, stargazers_count, owner } = res;
        return (
          <div className="card">
            <img
              className="image"
              alt=""
              src={avatar_url ? avatar_url : image}
            ></img>
            <div className="container">
              <h4>
                <b> Owner: {login ? login : owner.login}</b>
              </h4>

              {isUser ? (
                <p style={{ wordBreak: "break-word" }}>
                  Profile URL:{" "}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </p>
              ) : (
                <p style={{ wordBreak: "break-word" }}>
                  Repository URL:{" "}
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </a>
                </p>
              )}
              {!isUser && (
                <p style={{ wordBreak: "break-word" }}>Forks: {forks}</p>
              )}
              {stargazers_count && <p>Star Count: {stargazers_count}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
