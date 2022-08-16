import React from 'react'
import './PostSide.css'
import PostShare from '../PostShare/PostShare'
import Posts from '../Posts/Posts'

const PostSide = () => {
  return (
    <div>
          <div className = 'postSide'>
        <PostShare />
        <Posts />
          </div>
    </div>
  )
}

export default PostSide
