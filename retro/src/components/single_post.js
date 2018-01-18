import React from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const SinglePost = ({post}) => {
  // const video = props.video;
  return (
    <Card className="postBox">
    <CardBody>
        <CardTitle className="postTitle">{post.title}</CardTitle>
        <CardSubtitle className="postSubtitle">{post.type}</CardSubtitle>
        <CardText className="postContent">{post.content}</CardText>
    </CardBody>
    </Card>
  );
};

export default SinglePost
