import React, { useState } from "react";
import { Header, Grid, Input, Dropdown, Icon, Image } from "semantic-ui-react";

export default function MainLayout() {
  const [selection, setSelection] = useState("Users");
  const [userInput, setUserInput] = useState("");

  const options = [
    { key: 1, text: "Users", value: "Users" },
    { key: 2, text: "Repositories", value: "Repositories" }
  ];

  const handleSelection = (e, { value }) => {
    setSelection(value);
    if (value.length >= 4) {
      GetData(value);
    } else {
      alert("Must type at least four characters");
    }
  };
  const handleUserInput = (e, { value }) => {
    setUserInput(value);
  };
  console.log({ selection, userInput });
  return (
    <Grid verticalAlign="top" stackable>
      <Grid.Row textAlign="left">
        <Grid.Column width={16} textAlign="left" verticalAlign="middle">
          <Header as="h4">
            <Icon name="github" />
            <Header.Content>GitHubin</Header.Content>
          </Header>
        </Grid.Column>
        <Grid.Column width={8}>
          <Input
            focus
            placeholder="Search..."
            size="big"
            style={{ width: "325px" }}
            onChange={handleUserInput}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Dropdown
            clearable
            options={options}
            selection
            labeled
            text="Users"
            onChange={handleSelection}
            style={{ minHeight: "3.3rem" }}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
