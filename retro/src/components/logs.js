import React, { Component } from 'react';
import Log from './single_log';
import { Row } from 'reactstrap';


export default class Logs extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {log: this.props.logs, posts: this.props.posts, classId: this.props.match.params.id, submit: this.props.onSubmit}
  }

<<<<<<< HEAD
=======
  if (!posts) {
    return <div> Loading posts.. </div>
  }

  const logsItems = logs.map((log) => {
    return <SingleLog posts={posts} log={log} key={log.id} onSubmit={onSubmit} />
  });
>>>>>>> dev


render() {

  const logsItems = () => {
    return this.state.log.map((log) => {
    return <Log posts={this.state.posts} classId={this.state.classId} log={log} key={this.state.log._id} onSubmit={this.state.submit} />
  });
}

  return (
      <div className="list-group">
      <div>
      {
        !!this.state.log ? (
          <div>{logsItems()}</div>
        ) : (
          <div>"Loading..."</div>
        )
      }
      </div>
    </div>
    )
  }
}
