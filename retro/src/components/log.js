import React from 'react';
import SinglePost from './post'

import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


export default function Log(props) {
    const { _id, text, classroom_id } = props;


    return (
            
        <div>

            <span>
                Classroom ID: {classroom_id}
            </span>
            <br/>
            <span>
                ID: {_id}
            </span>
            <br/>
            <Container-fluid>
                <Row>
                    <Col>
                    <ListGroup className="logBase">
                        <ListGroupItem active>
                            <ListGroupItemHeading>{text} 15th January 2018</ListGroupItemHeading>
                        </ListGroupItem>

                        <ListGroupItem>

                            <SinglePost />


                        </ListGroupItem>

                    </ListGroup>
                    </Col>

                    
                </Row>
            </Container-fluid>
        </div>

    )
}




