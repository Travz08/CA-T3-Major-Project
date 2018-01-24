import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';

export default function ClassRoom({ classrooms }) {

  if (!classrooms) {
    return <div> Loading Classrooms.. </div>
  }

  const classItems = classrooms.map((classroom) => {
    return (
      <Button color="primary" className="mx-auto btn-warning class-list" tag={Link} key={classroom._id} to={`/classroom/${classroom._id}`}>
            <div>{classroom.class_name}</div>
      </Button>
    )
  });




  return (
      <div className="col-md-12 list-group">
        <h1 className="mx-auto trademark">Classrooms</h1>
        {classItems}
      </div>
    )
}
