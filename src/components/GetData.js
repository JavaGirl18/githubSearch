import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";

export default function GetData({ selection, userInput }) {
  useEffect(() => {
    if (selection === "Users") {
      axios.get(`/users/:${userInput}`, {
        firstName: "Finn",
        lastName: "Williams"
      });
    } else {
      axios.get(`/users/:${userInput}`, {
        firstName: "Finn",
        lastName: "Williams"
      });
    }
  });
}
