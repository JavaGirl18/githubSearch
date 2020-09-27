import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";

export default function GetData(selection, userInput) {
  // const [result, setResult] = useState([]);

  if (selection === "Users" && userInput.length >= 5) {
    console.log("user");
    fetch(`https://api.github.com/search/users?q=${userInput}&per_page=5`)
      .then(res => res.json())
      .then(data => {
        const { login } = data;
        return login;
      });
  }
  if (selection === "Repositories" && userInput.length >= 5) {
    console.log("repo");
    fetch(
      `https://api.github.com/search/repositories?q=${userInput}&per_page=5`
    )
      .then(res => res.json())
      .then(data => {
        return data;
      });
  } else {
    return "";
  }

  // return <div>result{result}</div>;
}
// if (selection && userInput) {
//   console.log({ selection, userInput });
//   const result = GetData(selection, userInput);
// }
