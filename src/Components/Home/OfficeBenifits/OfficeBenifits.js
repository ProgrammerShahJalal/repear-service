import React from 'react';
import painterPeople from '../../../images/painter1.png'
const OfficeBenifits = () => {
  return (
    <>
      <div className="container mx-auto my-5">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <div className="row">
              <div className="col-2">
                <i
                  style={{ color: "#fda12b" }}
                  className="far fa-clock fs-1 pt-3"></i>
              </div>
              <div className="col-10 text-start">
                <h3>Office 24/7 Opened</h3>
                <p>
                  Boldman is also likely to be focused on slow and gentle
                  movements so it’s a great type of steps to..
                </p>
                <a
                  href="#benifits"
                  style={{
                    textDecoration: "none",
                    color: "#fda12b",
                    fontWeight: "bold",
                  }}>
                  GET A FREE QUOTE &gt;&gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-4">
            <div className="row">
              <div className="col-2">
                <i
                  style={{ color: "#fda12b" }}
                  className="fas fa-plug fs-1 pt-3"></i>
              </div>
              <div className="col-10 text-start">
                <h3>Our Installations</h3>
                <p>
                  Boldman is also likely to be focused on slow and gentle
                  movements so it’s a great type of steps to..
                </p>
                <a
                  href="#benifits"
                  style={{
                    textDecoration: "none",
                    color: "#fda12b",
                    fontWeight: "bold",
                  }}>
                  GET A FREE QUOTE &gt;&gt;
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <div className="row">
              <div className="col-2">
                <i
                  style={{ color: "#fda12b" }}
                  className="fas fa-users-cog fs-1 pt-3"></i>
              </div>
              <div className="col-10 text-start">
                <h3>Our Services</h3>
                <p>Boldman is also likely to be focused on slow.</p>
                <img src={painterPeople} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OfficeBenifits;