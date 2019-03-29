import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Loader } from "semantic-ui-react";
import ProfileData from "./index";
import { fetchProfile } from "../../actions/orderActions";

class OrderDetails extends Component {
  componentWillMount() {
    this.props.fetchProfile();
  }

  render() {
    const nameObj = this.props.profile.name;
    const fullName = nameObj ? Object.values(nameObj).join(" ") : "";
    if (this.props.profile.registered) {
      return <ProfileData cardData={this.props.profile} fullName={fullName} />;
    } else {
      return <Loader active inline />;
    }
  }
}

OrderDetails.propTypes = {
  fetchProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.orders.profile
});

export default connect(
  mapStateToProps,
  { fetchProfile }
)(OrderDetails);
