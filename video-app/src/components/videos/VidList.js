import React from 'react'
import VidItem from './VidItem'

const VideoList = ({ videos, onVideoSelect }) => {//videos = props.videos (obj destructure)
    const renderedList = videos.map(video=>{
        return <VidItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId}/>
    })
    return <div className='ui relaxed divided list'>{renderedList}</div>
}

export default VideoList