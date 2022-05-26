import "./index.css";

const Supported = () => {
  return (
    <div className="supported" id="support">
      <div className="row">
        <div className="container">
          <div className="row py-5 align-items-center">
            <div className="col-12 col-lg-6">
              <h1 className="supported font-weight-bold">Supported By</h1>
            </div>
            <div className="col-12 col-lg-6 order-md-2 align-items-center d-flex justify-content-around">
              <img src="img/bangkit.png" alt="" />
              <img src="img/merdeka.png" alt="" />
              <img src="img/google.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supported;
