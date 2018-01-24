import React from 'react';
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem, Container} from 'reactstrap';

export default function ClassRoom({ classrooms }) {

  if (!classrooms) {
    return <div> Loading Classrooms.. </div>
  }

  const classItems = classrooms.map((classroom) => {
    return (
      <ListGroupItem className="col-lg-12 class-link" key={classroom._id} tag={Link} to={`/classroom/${classroom._id}`}>
        {classroom.class_name}
      </ListGroupItem>
    )
  });




  return (
      <Container className="classroom-body">
        <h1 className="mx-auto class-header trademark">Classrooms</h1>
        <ListGroup className="class-list mx-auto" >
          {classItems}
        </ListGroup>
      </Container>
    )
}
