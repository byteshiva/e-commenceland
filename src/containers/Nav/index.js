import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Label } from "semantic-ui-react";
import Orders from "../../components/Orders/";
import Profile from "../../components/Profile/Profile";
import OrderDetails from "../../components/OrderDetails/";
import HeaderMenu from "../Header";

function PreProcessProductDetails(match) {
  return (
    <div>
      <Label as="a" color="red" ribbon icon="closed captioning">
        Order Details
      </Label>
      <span> Your Order Summary</span>
      <Divider fitted />
      <OrderDetails idProduct={match.match.params.id} />
    </div>
  );
}

const FixedMenuLayout = () => (
  <Router>
    <Container>
      <HeaderMenu />
      <Container text style={{ marginTop: "7em" }}>
        <Route exact path="/" component={Profile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/orders" component={Orders} />
        <Route path="/orders/:id" component={PreProcessProductDetails} />
      </Container>
    </Container>
  </Router>
);

export default FixedMenuLayout;
