import React from 'react';
import Post from './posts';
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Log({posts, log}) {
    // const { _id, text, classroom_id } = props;
    // console.log(log.text)

    return (

            <Col className="col-md-1">
              <ListGroup className="logBase">
                <ListGroupItem active>
                    <ListGroupItemHeading>{log.text} {log.date}  <br/>          
                        <span>
                            Classroom ID: {log.classroom_id}
                        </span>
                    </ListGroupItemHeading>
                    <Link to={`/post/${log._id}`} >{log._id}</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Post posts={posts} logId={log._id} />
                </ListGroupItem>
              </ListGroup>
            </Col>

    )
}
