import React, { useState, useRef, useEffect } from "react";
import { Header, Grid, Input, Dropdown, Icon, Form } from "semantic-ui-react";
import { GetData } from ".";

export default function MainLayout() {
  const [selection, setSelection] = useState("");
  const [userInput, setUserInput] = useState("");

  const hold = useRef(selection);
  const options = [
    { key: 1, text: "Users", value: "Users" },
    { key: 2, text: "Repositories", value: "Repositories" }
  ];

  const handleSubmit = () => {
    let r = GetData(selection, userInput);

    console.log(r);

    console.log(login);
  };
  const handleSelection = (e, { value }) => {
    setSelection(value);
  };
  const handleUserInput = (e, { value }) => {
    setUserInput(value);
  };
  console.log({ selection, userInput });

  return (
    <>
      {/* <Grid verticalAlign="top" stackable>
        <Grid.Row textAlign="left">
        </Grid.Column>
        </Grid.Row>
      </Grid> */}
      {/* <Grid.Column width={8}> */}
      <Grid verticalAlign="top" stackable>
        <Grid.Row>
          <Grid.Column width={16} textAlign="left" verticalAlign="middle">
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
                {/* </Grid.Column> */}
                {/* <Grid.Column width={8}> */}
                <Form.Select
                  // clearable
                  options={options}
                  selection
                  onChange={handleSelection}
                  style={{ minHeight: "3.3rem" }}
                />
                <Form.Button
                  onClick={handleSubmit}
                  style={{ minHeight: "3.3rem" }}
                >
                  Submit
                </Form.Button>
              </Form.Group>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* </Grid.Column> */}
      {/* </Grid.Row> */}

      {/* </Grid> */}
    </>
  );
}
