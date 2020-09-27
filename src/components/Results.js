import React, { useState, useRef, useEffect } from "react";
import { Grid, Card, Image, Icon } from "semantic-ui-react";

export default function Results({ items }) {
  console.log({ items });

  return (
    <Card.Group>
      {items.map((res, index) => {
        const { avatar_url, login, url, name, full_name, forks } = res;
        return (
          <Card key={login}>
            <Image
              src={avatar_url ? avatar_url : null}
              size="medium"
              //   wrapped
              //   ui={false}
            />

            <Card.Content>
              <Card.Header>{login ? login : name}</Card.Header>
              {/* <Card.Meta>{url}</Card.Meta> */}
              <a>
                <Card.Description>{url ? url : full_name}</Card.Description>
              </a>
            </Card.Content>
            <Card.Content extra>{forks}</Card.Content>
          </Card>
        );
      })}
    </Card.Group>
  );
}
