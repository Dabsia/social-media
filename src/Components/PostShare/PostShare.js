import React, {useState, useRef} from 'react'
import profile from '../../Assets/dabo.jpg'
import './PostShare.css';
import { AiOutlineCalendar, AiOutlinePicture } from 'react-icons/ai'
import { MdVideoLibrary } from 'react-icons/md'
import { GrLocation } from 'react-icons/gr'


const PostShare = () => {

    const [image, setImage] = useState(null)
    const imageRef = useRef()
    
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }

  return (
      <div className = 'postShare'>
        <img src = {profile} alt = 'profile' />
          <div className = 'holder'>
            <input className = 'inputShare' type = 'text' placeholder = "What's happening" />
            <div className = 'postOptions'>
                <div className='option'>
                    < AiOutlinePicture className = 'media' style = {{color: 'var(--photo)'}}/>
                    <span>Photo</span>
                </div>
                <div className='option' onClick = {() => imageRef.current.click()} >
                    < MdVideoLibrary className = 'media' style = {{color: 'var(--video)'}} />
                    <span>Video</span>
                </div>
                <div className='option'>
                    < GrLocation className = 'media' style = {{color: 'var(--location)'}}/>
                    <span>Location</span>
                </div>
                <div className='option'>
                    < AiOutlineCalendar className = 'media' style = {{color: 'var(--schedule)'}}/>
                    <span>Schedule</span>
                  </div>
                  <div className = 'option'>
                    <button className = 'button ps-button'>Share</button>
                  </div>
                  <div style = {{display: 'none'}}>
                      <input type='file' name='myImage' ref={imageRef} onChange={ onImageChange} />
                  </div>
              </div>
              {
                  image && (
                      <div className='previewImage'>
                        cancel
                      </div>
                  )
              }
          </div>
      </div>
  )
}

export default PostShare