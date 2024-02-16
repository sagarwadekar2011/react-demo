import { useSelector, useDispatch } from "react-redux";
import classes from "./PostItem.module.css";
import { removePost } from "../../store/PostSlice";

function PostItem({ id, title, skills, project, description }) {
  const { isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onRemoveHandler = () => {
    dispatch(removePost(id));
  };

  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="row">
          <div className="col-2">
            <span className={classes.postSubtitle}>Project Name: </span>
          </div>
          <div className="col-10">
            <span className={classes.postSubtitleValue}>{project}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <span className={classes.postSubtitle}>Description: </span>
          </div>
          <div className="col-10">
            <span className={classes.postSubtitleValue}>{description}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <span className={classes.postSubtitle}>Required Skills: </span>
          </div>
          <div className="col-10">
            <ul className={classes.postSubtitleValue}>
              {skills.map((skill) => {
                return (
                  <li key={skill} className="me-2">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-end">
            <button className="btn btn-primary">Apply</button>
            {isAdmin && (
              <button className="btn btn-danger ms-2" onClick={onRemoveHandler}>
                Remove Post
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostItem;
