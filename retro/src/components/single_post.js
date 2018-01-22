import React from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const SinglePost = ({ logId, post }) => {
  // const video = props.video;
  // console.log('from single posts component', logId)


    if (post.log_id == logId) {
      return  (
        <Card className="postBox">
          <CardBody>
              <CardTitle className="postTitle">{post.title}</CardTitle>
              <CardSubtitle className="postSubtitle">{post.type} </CardSubtitle>
              <CardText className="postContent">{post.content}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return (
        null
      )
    }





};

export default SinglePost
