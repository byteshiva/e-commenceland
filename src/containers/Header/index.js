import React from "react";
import { Container, Menu, Icon } from "semantic-ui-react";
import { Link as RLink } from "react-router-dom";
import GB_BASE_URL from '../../constants/base/';


const HeaderMenu = () => (
  <Menu fixed="top" inverted color="violet">
    <Container>
      <Menu.Item header>
        <Icon name="bullhorn" />
        <RLink to={`${GB_BASE_URL}`} >e-Commerce Land</RLink>
      </Menu.Item>
      <Menu.Item>
        {" "}
        <RLink to={`${GB_BASE_URL}/profile`}>Profile</RLink>
      </Menu.Item>
      <Menu.Item>
        <RLink to={`${GB_BASE_URL}/orders`}>Orders</RLink>
      </Menu.Item>
    </Container>
  </Menu>
);

export default HeaderMenu;
