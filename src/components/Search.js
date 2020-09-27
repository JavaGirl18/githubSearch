import React, { useState, useRef, useEffect } from "react";
import { Header, Grid, Input, Dropdown, Icon, Form } from "semantic-ui-react";
import { GetData, Results } from ".";

export default function Search() {
  const [selection, setSelection] = useState("");
  const [userInput, setUserInput] = useState("");
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);

  const options = [
    { key: 1, text: "Users", value: "Users" },
    { key: 2, text: "Repositories", value: "Repositories" }
  ];

  const setData = ({ items }) => {
    setResults(items);
  };

  const handleSubmit = () => {
    if (selection === "Users" && userInput.length >= 5) {
      fetch(`https://api.github.com/search/users?q=${userInput}&per_page=5`)
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
    }
    if (selection === "Repositories" && userInput.length >= 5) {
      fetch(
        `https://api.github.com/search/repositories?q=${userInput}&per_page=5`
      )
        .then(res => res.json())
        .then(data => {
          setData(data);
        });
    }
  };

  const handleSelection = (e, { value }) => {
    setSelection(value);
  };
  const handleUserInput = (e, { value }) => {
    setUserInput(value);
  };
  console.log({ results });

  return (
    <>
      <Form>
        <Header as="h4">
          <Icon name="github" />
          <Header.Content>GitHubin</Header.Content>
        </Header>
        <Form.Group>
          <Form.Input
            focus
            placeholder="Search..."
            size="big"
            style={{ width: "325px" }}
            onChange={handleUserInput}
          />
          <Form.Select
            // clearable
            options={options}
            selection
            onChange={handleSelection}
            style={{ minHeight: "3.3rem" }}
          />
          <Form.Button onClick={handleSubmit} style={{ minHeight: "3.3rem" }}>
            Submit
          </Form.Button>
        </Form.Group>
      </Form>
      <Results items={results} />
    </>
  );
}
