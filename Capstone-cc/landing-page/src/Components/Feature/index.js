import "./index.css";

const Feature = () => {
  return (
    <div id="feature" className="feature">
      <div className="row feature align-items-center">
        <div className="col order-md-2 d-flex justify-content-end">
          <img src="img/feature.png" alt="" />
        </div>
        <div className="col order-md-1">
          <h1 className="font-weight-bold">Feature</h1>
          <hr />
          <p>
            Analyze your eyes and give you feedback after scanning your face
            with smartphone’s camera
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
