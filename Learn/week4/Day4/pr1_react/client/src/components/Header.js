const Header = () => {
  return (
    <header>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="header-content-container d-flex justify-content-between">
            <div className="">
              <h4 className="text-white">Dev horiz.D</h4>
            </div>
            <div className="">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled ">
                <li>
                  <a href="#" className="text-white">
                    Follow on Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Like on Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Email me
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white">Info</h4>
              <ul className="list-unstyled">
                <li>
                  <button
                    className="btn btn-outline-light"
                    style={{ marginBottom: "3%" }}
                  >
                    LOGOUT
                  </button>
                </li>
                <li>
                  <button className="btn btn-outline-light">INFO</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar navbar-dark bg-dark shadow-sm border-top">
        <div className="container">
          <a href="#" className="navbar-brand d-flex align-items-center">
            <strong>Movie Review</strong>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
