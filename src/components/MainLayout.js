import React, { useState, useRef, useEffect } from "react";
import { Header, Grid, Input, Dropdown, Icon } from "semantic-ui-react";
import { Results, Search } from ".";

export default function MainLayout() {
  return (
    <Grid verticalAlign="top" stackable>
      <Grid.Row>
        <Grid.Column width={16} textAlign="left" verticalAlign="middle">
          {/* <Form>
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
              <Form.Button
                onClick={handleSubmit}
                style={{ minHeight: "3.3rem" }}
              >
                Submit
              </Form.Button>
            </Form.Group>
          </Form> */}
          <Search />
          {/* <GetData/> */}
        </Grid.Column>
        {/* {display && <Results items={results} />} */}
      </Grid.Row>
    </Grid>
  );
}
