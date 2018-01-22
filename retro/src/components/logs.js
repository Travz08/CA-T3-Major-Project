import React from 'react';
import SingleLog from './single_log';
import { Row } from 'reactstrap';


export default function Logs({ logs, posts, onSubmit }) {

  if (!logs) {
    return <div> Loading Logs.. </div>
  }

  if (!posts) {
    return <div> Loading posts.. </div>
  }

  const logsItems = logs.map((log) => {
    return <SingleLog posts={posts} log={log} key={log.id} onSubmit={onSubmit} />
  });


  return (
      <div className="list-group" key={logs.id}  >
        <Container-fluid>
            <Row>
                {logsItems}
            </Row>
        </Container-fluid>
      </div>
    )
}
