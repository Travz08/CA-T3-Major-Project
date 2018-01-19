import React from 'react';
import Post from './posts'

import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


export default function Log({posts, log}) {
    // const { _id, text, classroom_id } = props;

    // console.log(log.text)
    return (

        <div>

            <span>
                Classroom ID: {log.classroom_id}
            </span>
            <br/>

            <Container-fluid>
                <Row>
                    <Col>
                    <ListGroup className="logBase">
                        <ListGroupItem active>
                            <ListGroupItemHeading>{log.text} 15th Jan 2018 ID: {log._id}</ListGroupItemHeading>
                        </ListGroupItem>

                        <ListGroupItem>

                            <Post posts={posts} logId={log._id}/>


                        </ListGroupItem>

                    </ListGroup>
                    </Col>


                </Row>
            </Container-fluid>
        </div>

    )
}
