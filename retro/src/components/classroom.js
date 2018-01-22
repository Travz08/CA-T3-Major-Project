import React from 'react';
import { Link } from 'react-router-dom'

export default function ClassRoom({ classrooms }) {

  if (!classrooms) {
    return <div> Loading Classrooms.. </div>
  }

  const classItems = classrooms.map((classroom) => {
    return (
      <Link key={classroom._id} to={`/classroom/${classroom._id}`}>
            <div>{classroom.class_name}</div>
      </Link>
    )
  });




  return (
      <div className="col-md-4 list-group">
        {classItems}
      </div>
    )
}
