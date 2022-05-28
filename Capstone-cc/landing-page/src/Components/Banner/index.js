import "./index.css";

const Banner = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">
          <span>Now</span> you can check your <span>eyes</span> before
          consulting with doctor
        </h1>
        <a
          href=""
          className="btn btn-outline-light tombol rounded-pill mt-3 py-3 px-4"
        >
          Download Now
        </a>
      </div>
    </div>
  );
};

export default Banner;
