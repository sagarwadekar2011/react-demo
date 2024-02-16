import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/posts");
    } else if (username && password) {
      setErrorMessage("Invalid Credentials, Please try again..!");
    }
  }, [isAuthenticated]);

  const userNameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const onCacelHandler = () => {
    setUsername("");
    setPassword("");
  };

  const validateForm = () => {
    if (username && password) {
      return true;
    } else {
      setErrorMessage("Username or Passord cannot be empty.");
      setIsSubmitted(false);
      return false;
    }
  };

  const onSubmitHandler = () => {
    setIsSubmitted(true);
    const isValid = validateForm();
    const payload = {
      username,
      password,
    };
    if (isValid) {
      dispatch(login(payload));
    }
  };
  return (
    <div className="row mt-5">
      <div className="col d-flex justify-content-center">
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                id="username"
                className="form-control"
                value={username}
                onChange={userNameChangeHandler}
              ></input>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                className="form-control"
                onChange={passwordChangeHandler}
              ></input>
            </div>
          </div>
          {errorMessage !== "" && (
            <p className="mt-2 mb-2 text-danger">{errorMessage}</p>
          )}
          <div className="row mt-4">
            <div className="col d-flex justify-content-center">
              <button
                className="btn btn-secondary me-2"
                type="button"
                onClick={onCacelHandler}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                type="button"
                onClick={onSubmitHandler}
                disabled={isSubmitted}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
