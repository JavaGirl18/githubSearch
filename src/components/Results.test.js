import React from "react";
import { render } from "@testing-library/react";
import { Results } from ".";

test("it renders the results", () => {
  const props = [
    {
      id: 1,
      avatar_url: "https://avatars1.githubusercontent.com/u/57936?v=4",
      login: "test1",
      url: "https://api.github.com/users/example/1"
    },
    {
      id: 2,
      avatar_url: "https://avatars1.githubusercontent.com/u/57936?v=3",
      login: "test2",
      url: "https://api.github.com/users/example/2"
    }
  ];

  const { container } = render(<Results items={props} />);

  expect(container.firstChild).toMatchSnapshot();
});
