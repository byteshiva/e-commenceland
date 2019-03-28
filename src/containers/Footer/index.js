import React from "react";
import { Container, List, Segment } from "semantic-ui-react";

const Footer = () => (
  <Segment
    color="violet"
    inverted
    vertical
    style={{ margin: "5em 0em 0em", padding: "1em 0em" }}
  >
    <Container textAlign="center">
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Contact Us
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
);

export default Footer;
