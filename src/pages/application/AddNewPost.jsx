import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../store/PostSlice";

function AddNewPost() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [projectName, setProjectName] = useState();
  const [description, setDescription] = useState();
  const [skills, setSkills] = useState([]);

  const onSkillsChangeHandler = (e) => {
    setSkills((oldValue) => {
      if (e.target.checked) {
        return [...oldValue, e.target.id];
      } else {
        return oldValue.filter((val) => val !== e.target.value);
      }
    });
  };

  const onAddNewPostHandler = () => {
    const formData = {
      title,
      project: projectName,
      description,
      skills,
    };
    dispatch(addNewPost(formData));
  };

  return (
    <div className="row d-flex justify-content-center mt-4">
      <div className="col-6">
        <form>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title d-flex justify-content-center">
                Add New Post
              </h4>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="projectName" className="form-label">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="desc"
                    rows="5"
                    cols="100"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <label htmlFor="title" className="form-label">
                    Select the Required Skills
                  </label>
                  <div className="d-flex">
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="angular"
                      value="angular"
                      name="angular"
                      onChange={onSkillsChangeHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="angular">
                      Angular
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="react"
                      value="react"
                      name="react"
                      onChange={onSkillsChangeHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="react">
                      React
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="vue"
                      value="vue"
                      name="react"
                      onChange={onSkillsChangeHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="vue">
                      Vue
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="java"
                      value="java"
                      name="java"
                      onChange={onSkillsChangeHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="java">
                      Java
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="form-check-input me-2"
                      id="springboot"
                      value="springboot"
                      name="springboot"
                      onChange={onSkillsChangeHandler}
                    ></input>
                    <label className="form-check-label" htmlFor="springboot">
                      Spring Boot
                    </label>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col d-flex justify-content-end">
                  <button type="button" className="btn btn-secondary me-2">
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onAddNewPostHandler}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNewPost;
