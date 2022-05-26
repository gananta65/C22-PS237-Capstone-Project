import "./index.css";

const Team = () => {
  return (
    <section className="ourteam" id="team">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="ourteam-title">Our Team</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card align-items-center py-4 member-card">
            <div className="member-pict">
              <img
                src="img/marvin.png"
                className="rounded-circle"
                alt="member"
              />
            </div>
            <div className="member-info">
              <h1 className="cart-title">Marvin</h1>
              <p>Machine Learning</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card align-items-center py-4 member-card">
            <div className="member-pict">
              <img
                src="img/alief.jpg"
                className="rounded-circle"
                alt="member"
              />
            </div>
            <div className="member-info">
              <h1 className="cart-title">Alief</h1>
              <p>Machine Learning</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card align-items-center py-4 member-card">
            <div className="member-pict">
              <img
                src="img/radit.jpg"
                className="rounded-circle"
                alt="member"
              />
            </div>
            <div className="member-info">
              <h1 className="cart-title">Radit</h1>
              <p>Mobile Development</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card align-items-center py-4 member-card">
            <div className="member-pict">
              <img
                src="img/arya.jpeg"
                className="rounded-circle"
                alt="member"
              />
            </div>
            <div className="member-info">
              <h1 className="cart-title">Arya</h1>
              <p>Mobile Development</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card align-items-center py-4 member-card">
            <div className="member-pict">
              <img
                src="img/tosan.png"
                className="rounded-circle"
                alt="member"
              />
            </div>
            <div className="member-info">
              <h1 className="cart-title">Tosan</h1>
              <p>Cloud Computing</p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card align-items-center py-4 member-card">
            <div className="member-pict">
              <img
                src="img/gananta.jpeg"
                className="rounded-circle"
                alt="member"
              />
            </div>
            <div className="member-info">
              <h1 className="cart-title">Gananta</h1>
              <p>Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
