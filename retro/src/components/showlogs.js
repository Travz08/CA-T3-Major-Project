import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleLog from './single_log';


class ShowLogs extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

//   componentDidMount() {
//   const { id } = this.props.match.params;
//   console.log({id})
// }

  render() {
    const { logs, posts } = this.props;
    console.log(posts)
    console.log('logs is: ', logs, !!logs)

    return (
      <div>
      {
        !!logs ? (
          <SingleLog log={logs} posts={posts} classId={this.props.match.params.id}/>
        ) : (
          <div>"Loading..."</div>
        )
      }
        </div>
    )

  }
}



  export default ShowLogs
