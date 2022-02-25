import React from 'react'

const VideoDetail = ({ video }) => {
  
  if (!video){return <div>Loading...</div>}
  const { title, description } = video.snippet;


  return (
    <div className='ui segment'>
      <h4 className="ui header">{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default VideoDetail