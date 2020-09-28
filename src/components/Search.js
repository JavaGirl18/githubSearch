import React, { useState, useEffect } from "react";
import { Results } from ".";
import axios from "axios";
import image from "../github.png";
import "./App.css";

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
    try {
      if (selection === "Users" && userInput.length >= 3) {
        setError({});
        setResults([]);
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
        setError({});
        setResults([]);
        const res = await axios(
          `https://api.github.com/search/repositories?q=${userInput}&per_page=9`
        );
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
    if (userInput !== "" && userInput.length < 3) {
      setError({ error: "Please enter at least 3 characters" });
    }
  }, [selection, userInput]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <img src={image} className="gitHub" alt="" />
        <h3>Start typing to search on GitHub</h3>
      </div>
      <p>You can search for users & repositories</p>
      <div className="form">
        <form>
          <input
            placeholder="Search..."
            style={{ minHeight: "3.3rem", width: "325px" }}
            onChange={handleUserInput}
            minlength="3"
          />
          <select
            id="choose"
            name="choose"
            style={{ minHeight: "3.3rem", width: "125px" }}
            onChange={handleSelection}
          >
            <option value="Users" selected>
              Users
            </option>
            <option value="Repositories">Repositories</option>
          </select>
        </form>
        <Results
          items={results}
          isUser={isUser}
          isLoading={loading}
          error={error}
        />
      </div>
    </>
  );
}
