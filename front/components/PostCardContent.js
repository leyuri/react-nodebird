import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PostCardContent = ({postData}) => {
    console.log("postData", postData)
    return (
        <div>
            {/* {postData.split(/(#[^\s#]+)/g).map((v) => {
                if (v.match(/(#[^\s#]+)/g)) {
                    return <Link href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
                }
                return v;
            })} */}

            {postData.split(/(#[^\s#]+)/g).map((v, i) => {
            if (v.match(/(#[^\s]+)/)) {
                return (
                <Link
                    href={{ pathname: '/hashtag' }}
                    as={`/hashtag/${v.slice(1)}`}
                    key={i}
                >
                    <a>{v}</a>
                </Link>
                );
            }
            return v;
            })}
        </div>
    )
}

PostCardContent.propTypes = {
    postData: PropTypes.string.isRequired
};

export default PostCardContent;