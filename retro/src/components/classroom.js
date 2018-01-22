import React from 'react';
import { Link } from 'react-router-dom'

export default function ClassRoom({ classrooms }) {

  if (!classrooms) {
    return <div> Loading Classroom.. </div>
  }

  const classItems = classrooms.map((classroom) => {
    return (
      <Link to={`/classroom/${classroom._id}`}>
            <div>{classroom.class_name}</div>
      </Link>
    )
  });




  return (
      <ul className="col-md-4 list-group">
        {classItems}
      </ul>
    )
}
