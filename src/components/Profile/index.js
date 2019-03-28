import React from "react";
import { Image, Card, Icon } from "semantic-ui-react";
import { FormattedDate } from "react-intl";

const CardExampleExtraContent = props => (
  <Card color="teal" raised>
    <Card.Content>
      <Image floated="right" size="mini" src={props.cardData.picture} />
      <Card.Header>{props.fullName}</Card.Header>
      <Card.Meta>{props.cardData.company}</Card.Meta>
      <Card.Description>{props.cardData.about}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Card.Header>Info:</Card.Header>
      <Card.Meta>
        <strong>
          <Icon link name="mail" /> :{" "}
        </strong>
        {props.cardData.email}
      </Card.Meta>
      <Card.Meta>
        <strong>
          <Icon link name="phone" /> :{" "}
        </strong>
        {props.cardData.phone}
      </Card.Meta>
      <Card.Meta>
        <strong>
          <Icon link name="address book" /> :{" "}
        </strong>
        {props.cardData.address}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Card.Header>GPS coordinates:</Card.Header>
      <Card.Meta>
        <strong>Lat:</strong>
        {props.cardData.latitude}
      </Card.Meta>
      <Card.Meta>
        <strong>Long:</strong>
        {props.cardData.longitude}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Card.Description>
        {" "}
        <strong>Registered On: </strong>
        <FormattedDate
          value={props.cardData.registered}
          day="numeric"
          month="long"
          year="numeric"
        />
      </Card.Description>
    </Card.Content>
  </Card>
);

export default CardExampleExtraContent;
