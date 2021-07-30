import Swal from "sweetalert2";
import Form from "../Form";

const Register = () => {
  const inputs = [
    { type: "text", name: "firstName", placeholder: "First Name" },
    { type: "text", name: "lastName", placeholder: "Last Name" },
    { type: "email", name: "email", placeholder: "Email Address" },
  ];

  const pw = [
    { name: "password", placeholder: "Password" },
    { name: "verifyPassword", placeholder: "Verify Password" },
  ];

  return <Form title="Register" inputs={inputs} pw={pw} auth={register} />;
};

const validate = (user) => {
  // EMPTY FIELD VALIDATION
  for (let [prop, val] of Object.entries(user)) {
    if (!val) {
      Swal.fire("Empty Field", `${prop} is empty. Please fill all the fields`, "error")
      return false;
    }
  }

  // PASSWORD VALIDATION
  let pattern = /^(?=.{8,15})(?=.*[\w])(?=.*[^\w]).*$/gi;
    if (pattern.test(user.password)) {
      return true;
    } else {
      throw {
        title: `Invalid Password`,
        text: `Please make sure the your password has at least 1 special character and at least 8 characters up to 15 characters.`,
      };
    }
}

const register = async (user) => {

}

export default Register;
