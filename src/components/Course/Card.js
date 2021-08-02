import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Card = (course) => {
  return (
    <div id="courseCard">
      <div>
        <div className="cardDetails">
          <div className="icon">₱</div>
          <div className="texts">
            <p>{course?.price}</p>
            <p className="sub">Financial Aid Available</p>
          </div>
        </div>
        <div className="cardDetails">
          <div className="icon">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="texts">
            <p>{course?.duration}</p>
            <p className="sub">2-3 hours per week</p>
          </div>
        </div>
      </div>
      <button id="enroll" type="button">
        ENROLL
      </button>
    </div>
  )
}

export default Card
