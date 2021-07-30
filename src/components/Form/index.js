// FUNCTIONS
import { handleInput } from "../../helper";
// COMPONENTS
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// IMAGE / ICONS
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Form = ({ title, inputs, pw, auth }) => {
  const [user, setUser] = useState({})

  const submit = (e) => {
    e.preventDefault()
    auth(user)
  }

  return (
    <section id={title.toLowerCase()}>
      <Title />
      <form onSubmit={submit}>
        {inputs.map((props) => (
          <input id={props.name} {...props} onInput={e => handleInput(e, user, setUser)} required />
        ))}
        {pw.map((props) => (
          <div>
            <input type="password" {...props} onInput={e => handleInput(e, user, setUser)} />
            <FontAwesomeIcon icon={faEyeSlash} />
          </div>
        ))}
      </form>
      <button type="submit">
        {title.toLowerCase() === "login" ? title : "Sign Up"}
      </button>
      <p>
        {title.toLowerCase() === "login"
          ? (<> Don't have an account? <a href="#register">Sign Up</a> </>)
          : (<> Already have an account? <a href="#login">Sign In</a> </>)
        }
      </p>
    </section>
  );
};

export default Form;
