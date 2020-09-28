import React, { useState, useEffect } from "react";
import { Results } from ".";
import axios from "axios";

export default function Search() {
  const [selection, setSelection] = useState("Users");
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [isUser, setIsUser] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const setData = ({ items }) => {
    setResults(items);
    if (selection === "Users") {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    console.log(loading);
    try {
      if (selection === "Users" && userInput.length >= 3) {
        const res = await axios(
          `https://api.github.com/search/users?q=${userInput}&per_page=9`
        );

        if (res.data.total_count > 0) {
          setData(res.data);
        } else {
          setError({ error: "No results" });
        }
      }
      if (selection === "Repositories" && userInput.length >= 3) {
        const res = await axios(
          `https://api.github.com/search/repositories?q=${userInput}&per_page=9`
        );
        console.log(res);
        if (res.data.total_count > 0) {
          setData(res.data);
        } else {
          setError({ error: "No results" });
        }
      }
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  console.log(results);
  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  };

  const handleSelection = e => {
    setSelection(e.target.value);
  };
  const handleUserInput = e => {
    setUserInput(e.target.value);
  };

  useEffect(() => {
    if (selection && userInput.length >= 3) {
      fetchData();
    } else if (selection && userInput.length < 3) {
      setResults([]);
    }
  }, [selection, userInput]);

  return (
    <div className="form">
      <form>
        <h4>
          {/* <Icon name="github" /> */}
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
          {/* <option value=""></option> */}
          <option value="Users" selected>
            Users
          </option>
          <option value="Repositories">Repositories</option>
        </select>

        {/* <input
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          style={{ minHeight: "3.3rem" }}
        /> */}
      </form>
      <Results
        items={results}
        isUser={isUser}
        isLoading={loading}
        error={error}
      />
    </div>
  );
}
