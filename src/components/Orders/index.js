import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Image, Table, Label, Divider } from "semantic-ui-react";
import { FormattedDate } from "react-intl";
import { Link } from "react-router-dom";
import { fetchOrders } from "../../actions/orderActions";

class Orders extends Component {
  componentWillMount() {
    this.props.fetchOrders();
  }

  render() {
    const ordersList = this.props.orders.map(order => (
      <Table.Row key={order.id}>
        <Table.Cell>
          <Image
            size="mini"
            src={order.product.picture}
            style={{ marginRight: "1.5em" }}
          />
        </Table.Cell>
        <Table.Cell>
          <Link to={`/orders/${order.id}`}>{order.product.name}</Link>
        </Table.Cell>
        <Table.Cell> {order.price}</Table.Cell>
        <Table.Cell>{order.product.orderStatus}</Table.Cell>
        <Table.Cell>
          <FormattedDate
            value={order.product.orderDate}
            day="numeric"
            month="long"
            year="numeric"
          />
        </Table.Cell>
      </Table.Row>
    ));
    return (
      <div>
        <Label as="a" color="red" ribbon icon="closed captioning">
          Your Orders
        </Label>
        <span>
          <b> All Orders</b>
        </span>
        <Divider fitted />

        <Table
          celled
          collapsing
          color="green"
          striped
          size="large"
          unstackable
          key="green"
        >
          <Table.Header color="brown">
            <Table.Row>
              <Table.HeaderCell>Product Image</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Price</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
              <Table.HeaderCell>Ordered Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{ordersList}</Table.Body>
        </Table>
      </div>
    );
  }
}

Orders.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  orders: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  orders: state.orders.orders
});

export default connect(
  mapStateToProps,
  { fetchOrders }
)(Orders);
