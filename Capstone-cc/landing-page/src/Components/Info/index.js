import "./index.css";

const Info = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-10 info-panel">
        <div className="row">
          <div className="col-lg">
            <img
              src="img/machine-learning.png"
              alt="Machine Learning"
              className="float-left info-img"
            />
            <h4>Machine Learning</h4>
            <p>Processed and classified with machine learning models</p>
          </div>
          <div className="col-lg">
            <img
              src="img/smartphone.png"
              alt="Mobile"
              className="float-left info-img"
            />
            <h4>Mobile App</h4>
            <p>Access the app on Android</p>
          </div>
          <div className="col-lg">
            <img
              src="img/cloud-server.png"
              alt="Cloud"
              className="float-left info-img"
            />
            <h4>Cloud</h4>
            <p>Google Cloud is the place where all data will be processed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
