import React from 'react'
import './Post.css'

import Comment from '../../Assets/comment.png'
import Heart from '../../Assets/like.png'
import Share from '../../Assets/share.png'
import NotLike from '../../Assets/notlike.png'

const Post = ({name, img, desc, likes, liked}) => {
  return (
      <div className='post'>
          <img src={img} alt={name} />
          <div className='postReact'>
              <img src={liked ? Heart : NotLike} alt='switch' />
              <img src={Comment} alt='comment' />
              <img src = {Share} alt = 'share' />
          </div>
          <span className = 'likes' >{likes} likes</span>
          <div className = 'detail'>
              <span><b>{name}</b></span>
              <span>{desc}</span>
          </div>
      </div>
  )
}

export default Post