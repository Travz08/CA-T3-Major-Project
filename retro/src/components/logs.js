import React, { Component } from 'react';
import Log from './single_log';
import { Row } from 'reactstrap';


export default class Logs extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {log: this.props.logs, posts: this.props.posts, classId: this.props.match.params.id, submit: this.props.onSubmit}
  }


render() {

  const logsItems = () => {
    return this.state.log.map((log) => {
    return <Log posts={this.state.posts} classId={this.state.classId} log={log} key={this.state.log._id} onSubmit={this.state.submit} />
  });
}

  return (
      <div className="list-group">
      <Container-fluid>
         <Row>
         <div>
         {
           !!this.state.log ? (
             <div>{logsItems()}</div>
           ) : (
             <div>"Loading..."</div>
           )
         }
         </div>
         </Row>
     </Container-fluid>

    </div>
    )
  }
}
