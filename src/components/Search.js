import React, { useState, useRef, useEffect } from "react";
import { Header, Grid, Input, Dropdown, Icon, Form } from "semantic-ui-react";
import { GetData, Results } from ".";

export default function Search() {
  const [selection, setSelection] = useState("");
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);

  const setData = ({ items }) => {
    setResults(items);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (selection === "Users" && userInput.length >= 5) {
      fetch(`https://api.github.com/search/users?q=${userInput}&per_page=9`)
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
    }
    if (selection === "Repositories" && userInput.length >= 5) {
      fetch(
        `https://api.github.com/search/repositories?q=${userInput}&per_page=9`
      )
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
    }
  };

  const handleSelection = e => {
    setSelection(e.target.value);
  };
  const handleUserInput = e => {
    setUserInput(e.target.value);
  };
  console.log({ results });

  return (
    <div className="form">
      <form>
        <h4>
          <Icon name="github" />
          {/* <i className="fab fa-github"></i> */}
          GitHubin
        </h4>
        <input
          placeholder="Search..."
          style={{ minHeight: "3.3rem", width: "325px" }}
          onChange={handleUserInput}
        />
        <select
          id="choose"
          name="choose"
          style={{ minHeight: "3.3rem", width: "125px" }}
          onChange={handleSelection}
        >
          <option value=""></option>
          <option value="Users">Users</option>
          <option value="Repositories">Repositories</option>
        </select>

        <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          style={{ minHeight: "3.3rem" }}
        />
      </form>
      <Results items={results} />
    </div>
  );
}
