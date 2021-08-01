// FUNCTIONS
import { FormCtx, handleInput } from "../../helper";
// COMPONENTS
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, Button } from "react-bootstrap";
// IMAGE / ICONS
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";

const Form = ({ title, inputs, pw, auth }) => {
  const [user, setUser] = useState({})
  const { setFormType } = useContext(FormCtx)

  const submit = (e) => {
    e.preventDefault();
    auth(user);
  }

  return (
    <>
      <Title title={title} />
      <form onSubmit={submit}>
        {inputs.map((props) => (
          <FormControl key={props.name} id={props.name} {...props} onInput={e => handleInput(e, user, setUser)} />
        ))}
        {pw.map((props) => (
          <div key={props.name} className="inptPass">
            <FormControl type="password" {...props} onInput={e => handleInput(e, user, setUser)} />
            <FontAwesomeIcon icon={faEyeSlash} />
          </div>
        ))}

        <Button type="submit">
          {title.toLowerCase() === "login" ? title : "Sign Up"}
        </Button>

        <p>
          {title.toLowerCase() === "login"
            ? (<> Don't have an account? <a onClick={() => setFormType("register")}>Sign Up</a> </>)
            : (<> Already have an account? <a onClick={() => setFormType("login")}>Sign In</a> </>)
          }
        </p>
      </form>
    </>
  );
};

export default Form;
