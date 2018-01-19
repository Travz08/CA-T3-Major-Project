import React from 'react';
import SingleLog from './single_log';

export default function Logs({ logs, posts }) {

  if (!logs) {
    return <div> Loading Logs.. </div>
  }

  const logsItems = logs.map((log) => {
    return <SingleLog posts={posts} log={log} />
  });


  return (
      <ul className="col-md-4 list-group">
        {logsItems}
      </ul>
    )
}
