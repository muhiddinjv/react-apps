import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos}) => {//videos = props.videos (obj destructure)
    const renderedList = videos.map(video=>{
        return <VideoItem video={video}/>
    })
    return <div>{renderedList}</div>

}

export default VideoList