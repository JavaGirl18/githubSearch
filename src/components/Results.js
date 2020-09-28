import React from "react";
import "./Results.css";
import image from "../fork.png";

export default function Results({ items, isUser, isLoading, error }) {
  return (
    <div className="grid">
      {items.map((res, index) => {
        const {
          avatar_url,
          login,
          url,
          followers,
          name,
          full_name,
          forks,
          stargazers_count,
          owner
        } = res;
        return (
          <div className="card">
            <img className="image" src={avatar_url ? avatar_url : image}></img>
            <div className="container">
              <h4>
                <b> Owner: {login ? login : owner.login}</b>
              </h4>

              {isUser ? (
                <p style={{ wordBreak: "break-word" }}>
                  Profile URL: <a>{url}</a>
                  {followers}
                </p>
              ) : (
                <p style={{ wordBreak: "break-word" }}>
                  Repository URL: <a>{url}</a>
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
