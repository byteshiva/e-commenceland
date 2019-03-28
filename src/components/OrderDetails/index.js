import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchOrders } from "../../actions/orderActions";
import { Item, Label, Icon, Button, Divider } from "semantic-ui-react";
import { FormattedDate } from "react-intl";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

class OrderDetails extends Component {
  componentWillMount() {
    this.props.fetchOrders();
  }

  render() {
    const orderId = this.props.idProduct;
    const productDetails = this.props.orders.filter(o => o.id === orderId);
    const itemGroupMarkUp = productDetails.map(pdata => (
      <Item key={`pdt_{orderId}`}>
        <Item.Image src={pdata.product.picture} />
        <Item.Content>
          <Item.Header as="a">{pdata.product.name}</Item.Header>
          <Item.Meta>
            <span className="cinema">{pdata.price}</span>
          </Item.Meta>
          <Item.Description>{pdata.product.description}</Item.Description>
          <Item.Extra>
            <Label color="blue">{pdata.product.orderStatus}</Label>
            <Label color="yellow">
              <Icon name="calendar" />
              <FormattedDate
                value={pdata.product.orderDate}
                day="numeric"
                month="long"
                year="numeric"
              />{" "}
            </Label>
          </Item.Extra>
        </Item.Content>
      </Item>
    ));

    return (
      <div>
        <Item.Group divided>{itemGroupMarkUp}</Item.Group>
        <Divider />
        <Button color="brown" onClick={customHistory.goBack}>
          Go Back
        </Button>
      </div>
    );
  }
}

OrderDetails.propTypes = {
  // createPost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  orders: state.orders.orders
});

export default connect(
  mapStateToProps,
  { fetchOrders }
)(OrderDetails);
