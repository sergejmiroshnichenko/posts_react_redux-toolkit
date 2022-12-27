import React from 'react';


const PostsItem = ({ post }) => {

    return (
        <>
            <div>
                <ul>
                    <li>
                        <strong>name:</strong> {post.title}
                    </li>
                    <li>
                        <strong>city:</strong> {post.body}
                    </li>
                </ul>
            </div>
        </>
    );
};

export default PostsItem;
