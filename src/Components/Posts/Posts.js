import React from 'react'
import './Posts.css'
import { PostsData } from './PostsData'
import Post from '../Post/Post'

const Posts = () => {
  return (
      <div className = 'posts'>
          {
              PostsData.map((PostData, id) => {
                  return <Post
                        key = {id}
                      name={PostData.name} img={PostData.img} desc={PostData.desc} likes={PostData.likes} liked={PostData.liked} />
              })
        }
      </div>
  )
}

export default Posts