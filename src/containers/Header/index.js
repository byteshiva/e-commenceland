import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderMenu = () => (
  <Menu fixed="top" inverted color="violet">
    <Container>
      <Menu.Item header>
        <Icon name="bullhorn" />
        <Link to="/">e-Commerce Land</Link>
      </Menu.Item>
      <Menu.Item>
        {" "}
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/orders">Orders</Link>
      </Menu.Item>
    </Container>
  </Menu>
);

export default HeaderMenu;
