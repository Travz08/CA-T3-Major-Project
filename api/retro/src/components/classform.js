import React from 'react';
import ClassRoom from './classroom';

export default function ClassRoomForm({ onSubmit, classrooms }) {

// This function pushes it up the line you can embed a function within a function then it pushes it
// to the onSubmit function

function handleFormSubmission(event) {
  //this preventDefault tells the DOM
  // when you click on a button on a form or div that click propogates up each element has a default action
  // prevent default prevents the default action of the element
  // event.stopPropagation - prevents the event from going up the chain
  event.preventDefault();
  // console.log(event.target.elements);
  const {elements} = event.target;
  const class_name = elements["name"].value;
  const date_started = elements["date_started"].value;
  const date_ended = elements["date_ended"].value;
  onSubmit({class_name, date_started, date_ended});
}

  return (
    <div>
      <div className="container row">
        <form className="col s12" onSubmit={handleFormSubmission}>
        <div className="row">
          <div className="input-field col s6">
            <input id="classroom_name" type="text" className="validate" name="name"/>
            <label htmlFor="classroom_name" >Name &nbsp;</label>
          </div>
          <div className="input-field col s6">
            <input id="date_started" type="date" className="validate" name="date_started"/>
            <label htmlFor="date_started" >Year &nbsp;</label>
          </div>
          <div className="input-field col s6">
            <input id="date_ended" type="date" className="validate" name="date_ended"/>
            <label htmlFor="date_ended" >Year &nbsp;</label>
          </div>
        </div>
          <button className="waves-effect waves-light btn" type="submit">Create Class Room</button>
        </form>
      </div>
    </div>
  )
}
