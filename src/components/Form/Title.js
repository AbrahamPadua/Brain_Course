import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { closeForm } from "../../helper";


const Title = ({ title }) => {
  return (
    <div className="form-title">
      <h2>{title}</h2>
      <FontAwesomeIcon icon={faTimes} onClick={closeForm} />
    </div>
  );
};

export default Title;
