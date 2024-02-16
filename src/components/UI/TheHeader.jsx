import { Link } from "react-router-dom";
import ReactImg from "../../logo.svg";
import classes from "./TheHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function TheHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, isAdmin } = useSelector((state) => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="row">
      <div className={classes.header}>
        <div className="col-7">
          <img className={classes.logo} src={ReactImg} alt="React"></img>
        </div>
        <div className="col-4 d-flex justify-content-end">
          {isAuthenticated && (
            <nav>
              <ul>
                {isAdmin && (
                  <li>
                    <Link to="/posts/add">Add New Post</Link>
                  </li>
                )}
                <li>
                  <Link to="/posts">All Requirements</Link>
                </li>
                <li>
                  <Link to="/my-applications">My Applications</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className="col-1 d-flex justify-content-end">
          <div className={classes.profile}>
            {!isAuthenticated && <Link to="/auth/login">Login</Link>}
            {isAuthenticated && <Link onClick={logoutHandler}>Logout</Link>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheHeader;
