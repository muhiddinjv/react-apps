import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
    const {title, thumbnails, description} = video.snippet
    console.log(description.length);
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