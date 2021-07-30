import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Title = ({ title }) => {
  return (
    <div className="form-title">
      <h2>{title}</h2>
      <FontAwesomeIcon icon={faTimesCircle} />
    </div>
  );
};

export default Title;
