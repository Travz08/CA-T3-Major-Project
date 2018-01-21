import React from 'react';
import Post from './posts'

import { Col, ListGroup, ListGroupItem, ListGroupItemHeading } from 'reactstrap';


export default function Log({posts, log}) {
    // const { _id, text, classroom_id } = props;

    // console.log(log.text)
    return (
                    <Col className="col-md-2">
                        <ListGroup className="logBase">
                            <ListGroupItem active>
                                <ListGroupItemHeading>{log.text} 15th Jan 2018</ListGroupItemHeading>
                            </ListGroupItem>

                            <ListGroupItem>

                                <Post posts={posts} logId={log._id} />


                            </ListGroupItem>
                        </ListGroup>
                    </Col>
    )
}
