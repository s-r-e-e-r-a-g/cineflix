import React from 'react'
import './videoClip.css'

const VideoClip = ({video}) => {
  return (
     video && video.results.length > 0 && <div className="video_container">
      <h2 className="video_header">Related Videos</h2>
      <div className="video_wrapper">
        {video &&
          video.results.slice(0,10).map((videoData) => (
            <div key={videoData.key} className="video_card">
              <iframe className='video_frame' width="360" height="220" style={{backgroundColor:"grey", borderRadius:"10px"}} src={`https://www.youtube.com/embed/${videoData.key}`}
              title={videoData.name} frameBorder="0"
              allowFullScreen></iframe>
            </div>
          ))}
      </div>
    </div>
  );
}

export default VideoClip