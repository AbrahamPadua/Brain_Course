import { Player } from "video-react"

const HomeVideo = () => {
  return (
    <div className="video-container">
      <div className="color-overlay"></div>
      <video typeof="Video/webm" autoPlay loop muted>
        <source src="/landing-vid.webm" />
      </video>
    </div>
  )
}

export default HomeVideo
