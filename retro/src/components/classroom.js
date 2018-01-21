import React from 'react';

export default function ClassRoom({ classrooms }) {

  if (!classrooms) {
    return <div> Loading Classroom.. </div>
  }

  const classItems = classrooms.map((classroom) => {
    return (
      <div>{classroom.class_name}</div>
    )
  });


  return (
      <ul className="col-md-4 list-group">
        {classItems}
      </ul>
    )
}
