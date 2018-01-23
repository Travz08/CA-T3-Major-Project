import React, {Component} from 'react';
// import { Card, CardTitle, CardSubtitle, CardText, CardBody } from 'reactstrap';
import { Media } from 'reactstrap';
import { connect } from 'react-redux';
import Linkify from 'react-linkify';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.post.log_id)

  }

  render() {
    if (this.props.post.log_id == this.props.logId) {
      return  (

        <Media>
          <Media left>
            <Media object data-src={this.props.post.image_url} alt="Profile Picture" />
          </Media>
          <Media body>
            <Media heading>
            {this.props.post.title}
            </Media>
            <Media heading>
              {this.props.post.type}
            </Media>
            {this.props.post.content}
        </Media>
        </Media>
        // <Card className="postBox">
        //   <CardBody>
        //     <CardSubtitle className="postSubtitle">{this.props.post.log_id}</CardSubtitle>
        //     <CardTitle className="postTitle"></CardTitle>
        //     <CardSubtitle className="postSubtitle"></CardSubtitle>
        //     <Linkify>
        //     <CardText className="postContent"></CardText>
        //     </Linkify>
        //   </CardBody>
        // </Card>
      );
    } else {
      return (
        null
      )
    }
}



};

function mapStateToProps(state) {
 // returning an object, and passing it to Header as props.
  return {auth: state.auth}
}


export default connect(mapStateToProps)(SinglePost)
