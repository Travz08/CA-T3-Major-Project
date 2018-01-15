import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container-fluid>
          <Row>
            <Col>
              <ListGroup className="logBase">
                <ListGroupItem active>
                  <ListGroupItemHeading>Monday 15th January 2018</ListGroupItemHeading>
                  <ListGroupItemText>
                    <Card className="postBox">
                      <CardBody>
                        <CardTitle className="postTitle">Title of the post</CardTitle>
                        <CardSubtitle className="postSubtitle">Lesson Summary</CardSubtitle>
                        <CardText className="postContent">The quick brown fox jumped over the lazy dog.</CardText>                        
                      </CardBody>
                    </Card>

                  </ListGroupItemText>
                </ListGroupItem>

                <ListGroupItem>

                <Card className="postBox">
                      <CardBody>
                        <CardTitle className="postTitle">Title of the post</CardTitle>
                        <CardSubtitle className="postSubtitle">Challenge</CardSubtitle>
                        <CardText className="postContent">The quick brown fox jumped over the lazy dog.</CardText>                                                
                      </CardBody>
                    </Card>

                </ListGroupItem>

              </ListGroup>
            </Col>

            
          </Row>
        </Container-fluid>
      </div>
    );
  }
}

export default App;
