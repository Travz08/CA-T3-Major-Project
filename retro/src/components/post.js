import React from 'react';
import { Row, Col, Card, CardTitle, CardSubtitle, CardText, CardBody, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';


export default function Post({ posts }) {
    // const { _id, text, classroom_id } = props;
    // const { title, content, log_id } = posts;
    console.log('posts: ', posts)
    
    return (
        <div>

            {
                !!posts ? (
                    posts.map(post => (
                        ('im a post')
                    ))
                ) : ('No Posts')
            }
        </div>

        // <Card className="postBox">
        // <CardBody>
        //     <CardTitle className="postTitle">Title sdfsdfof the post</CardTitle>

        //     {
        //     !!posts ? (
        //         posts.map(post => (
        //         //   <Post posts={posts} />
        //         <div>Yay</div>
        //         ))
        //     ) : ('No posts??')
        //     }

        //     <CardSubtitle className="postSubtitle">Challenge</CardSubtitle>
        //     <CardText className="postContent">The quick brown fox jumped over the lazy dog.</CardText>
        // </CardBody>
        // </Card>
    )
}

// class Post extends Component {
//
//   constructor(posts) {
//     super(posts);
//     this.state = posts
//     console.log('posts: ', posts)
//   }
//     render() {
//       return (
//         <div> Hello there</div>
//       )
//     }
// }
//
// export default Post
