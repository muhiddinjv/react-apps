import React from 'react';
import './VidItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    const {title, thumbnails} = video.snippet
    // const {title, thumbnails, description} = video.snippet
  return (
    <div onClick={()=>onVideoSelect(video)} className='video-item item'>
        <img className='ui image' src={thumbnails.medium.url} alt={title} />
        <div className="content">
            <div className="header">{title}</div>
            {/* <div className="description">{description}</div> */}
        </div>
    </div>
  )
}

export default VideoItem