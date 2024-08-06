import "./Background.css";
import video1 from "../../assets/video1.mp4";
import car from "../../assets/car.jpg";
import car1 from "../../assets/car1.jpg";
import car3 from "../../assets/car3.jpg";

function Background(props) {
  const { play, picCount } = props;

  if (play) {
    return (
      <video className="background trans" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (picCount === 0) {
    return <img src={car} className="background trans" alt="" />;
  } else if (picCount === 1) {
    return <img src={car1} className="background trans" alt="" />;
  } else if (picCount === 2) {
    return <img src={car3} className="background trans" alt="" />;
  }
}

export default Background;
