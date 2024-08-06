import './Page.css'
import next_icon from  "../../assets/next_icon.png";
import play_icon from "../../assets/play_icon.png"
import pause_icon from "../../assets/pause_icon.png"


function Page(props) {
  const {picCount,setPicCount,picData,play,setPlay} = props
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{picData.text1}</p>
        <p>{picData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={next_icon} alt="" />
      </div>
      <div className="hero-dot-play">
        <ul className='hero-dots'>
          <li onClick={()=>setPicCount(0)} className={picCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setPicCount(1)} className={picCount===1?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setPicCount(2)} className={picCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={()=> setPlay(!play)} src={play? pause_icon:play_icon} alt="" />
          <p>See the Video</p>
        </div>
      </div>
    </div>
  )
}

export default Page