import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Jumbotron } from "react-bootstrap";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Jumbotron className="text-center">
      <h1>
        EXPLORE<span style={{ fontSize: "3rem" }}>&nbsp;</span> YOUR MIND
        <span>.</span>
      </h1>
      <p className="lead">
        Learn the ins and outs of the brain from renowned leading experts
        in the field of Neuroscience.
      </p>
      <a href="./courses">Learn Now</a>
      <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
    </Jumbotron>
  );
};

export default Header;
