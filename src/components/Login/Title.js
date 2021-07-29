import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="form-title">
      <h2>Login</h2>
      <FontAwesomeIcon icon={faTimesCircle} />
    </div>
  );
};

export default Title;
