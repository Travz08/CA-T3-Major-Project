import React, { Component } from 'react';
import SingleLog from './single_log';
import { Row } from 'reactstrap';


export default class Logs extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {log: this.props.log, posts: this.props.posts, classId: this.props.classId, submit: this.props.onSubmit}
  }

  logsItems() {this.state.log.map((log) => {
    return <SingleLog posts={this.state.posts} log={log} key={this.state.log._id} onSubmit={this.state.submit} />
  });
}

render() {

  if (!this.state.log) {
    return <div> Loading Logs.. </div>
  }

  if (!this.state.posts) {
    return <div> Loading Posts.. </div>
  }


  return (
      <div className="list-group" key={this.log.id}  >
        <Container-fluid>
            <Row>
                {this.logsItems()}
            </Row>
        </Container-fluid>
      </div>
    )
  }
}
