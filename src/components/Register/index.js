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
  try {
    // EMPTY FIELD VALIDATION
    for (let [prop, val] of Object.entries(user)) {
      if (!val) {
        const err = Error(`<b>${prop}</b> is empty.<br/>Please fill all the required inputs.`);
        err.title = `Empty Field`;
        throw err;
      }
    }

    // PASSWORD VALIDATION
    let pattern = /^(?=.{6,})(?=.*[\w])(?=.*[^\w]).*$/gi;
    if (user.password !== user.verifyPassword) {
      const err = Error(`Please make sure the password you have entered are the same.`);
      err.title = `Invalid Password`;
      throw err;
    } else if (pattern.test(user.password)) {
      return true;
    } else {
      const err = Error(`Please make sure the your password has at least 1 special character and at least 6 characters.`);
      err.title = `Invalid Password`;
      throw err;
    }

  } catch (err) {
    Swal.fire(err.title, err.message, "error");
    return false;
  }
}

const register = async (user) => {
  // VALIDATION
  if (!validate(user)) return;

  try {
    const res = await fetch(
      `https://course-booking-server.herokuapp.com/api/users/register`,
      {
        method: `POST`,
        headers: {
          'Content-Type': `application/json`,
        },
        body: JSON.stringify(user),
      }
    );

    if (res.status < 300) {
      Swal.fire({
        icon: `success`,
        text: `Registered Successfully`,
      });

      // window.location.assign("")
      return;
    }

    const err = new Error("Please Try Again");
    err.title = "Email Already Taken";
    throw err;

  } catch (err) {
    Swal.fire(err.title, err.message, "error");
    return;
  }
}

export default Register;
