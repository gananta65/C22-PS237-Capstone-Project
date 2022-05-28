import "./index.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="row about align-items-center justify-content-center">
        <div className="col">
          <img src="img/about.png" alt="" />
        </div>
        <div className="col">
          <h1 className="font-weight-bold">About Us</h1>
          <hr />
          <p>
            APPMAT is a tech app that work in the healthcare sector. This app
            can analyze your eyes by scanning your face with smartphone’s camera
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
