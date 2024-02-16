import classes from "./TheFooter.module.css";
function TheFooter() {
  return (
    <div className={classes.footer}>
      <div className="row">
        <div className="col">
          <span className={classes.footer}>All Rights reserved</span>
        </div>
      </div>
    </div>
  );
}

export default TheFooter;
