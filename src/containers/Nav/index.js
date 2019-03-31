import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Label } from "semantic-ui-react";
import Orders from "../../components/Orders/";
import Profile from "../../components/Profile/Profile";
import OrderDetails from "../../components/OrderDetails/";
import HeaderMenu from "../Header";
import HomePage from '../Home';
import GB_BASE_URL from '../../constants/base/';
import NoMatch from '../NoMatch/';

function PreProcessProductDetails(match) {
  return (
    <div>
      <Label as="a" color="red" ribbon>
        Order Details
      </Label>
      <span> Your Order Summary</span>
      <Divider fitted />
      <OrderDetails idProduct={match.match.params.id} />
    </div>
  );
}
/** 
  @todo - Restructure router tag - testing todo Bot
  @body - expand and include multiple other options, - i'm testing @todo tag - ignore this comment.
*/

const FixedMenuLayout = () => (
  <Router>
    <Container>
      <HeaderMenu />
      <Container text style={{ marginTop: "7em" }}>
        <Switch>
          <Route exact path={`${GB_BASE_URL}/profile`} component={Profile} />
          <Route exact path={`${GB_BASE_URL}/orders`} component={Orders} />
          <Route path={`${GB_BASE_URL}/orders/:id`} component={PreProcessProductDetails} />
          <Route exact path={`${GB_BASE_URL}`} component={HomePage} />
          <Route component={NoMatch}/>
        </Switch>
      </Container>
    </Container>
  </Router>
);

export default FixedMenuLayout;
