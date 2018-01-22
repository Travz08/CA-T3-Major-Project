import React from 'react';
import SinglePost from './single_post'

export default function Post({ logId, posts }) {
    // const { _id, text, classroom_id } = props;
    // const { title, content, log_id } = posts;
    // console.log('from posts component', logId)

    // ** Trying to grab the log._id(logId) and match against post.log_id **
    // tried but it only shows last days posts..
    const postsContent = posts.map((post) => {
      // if (post.log_id == logId) {
        return <SinglePost post={post} logId={logId} />
      // }
    });

    return (
        <div>
          {postsContent}
        </div>
    )
}
