import React from "react";
import team1 from "../../../images/team-one-1.jpg";
import team2 from "../../../images/team-two.jpg";
import team3 from "../../../images/team-eight.jpg";
import team4 from "../../../images/team-four.jpg";
import team5 from "../../../images/team-five.jpg";
import team6 from "../../../images/team-six.jpg";
import "./OurGreatTeam.css";
const OurGreatTeam = () => {
  return (
    <>
      <div className="">
        <div className="container mx-auto">
          <div className="row w-100">
            <div className="col-lg-4 col-md-4 col-sm-12 lineOne">
              <p>WORKING WITH EXCELLENT</p>
              <h2>Our Great Team</h2>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12 lineTwo d-flex align-items-center">
              <div>
                <h6>
                  Our people at Boldman are most valuable assets. <br /> <br />{" "}
                  They are the faces of our organization.
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 d-flex align-items-center">
              <a
                className="lineAnchor"
                href="#ourgreatteam"
                style={{ textDecoration: "none" }}>
                VIEW MORE TEAM&gt;&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col blog-card">
            <div class="card h-100">
              <img src={team1} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title blog-title">Alex Edward</h5>
                <p class="card-text blog-title">Plumber</p>
                <i class="fab fa-facebook me-2 blog-title"></i>
                <i class="fab fa-twitter me-2 blog-title"></i>
                <i class="fab fa-instagram blog-title"></i>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 blog-card">
              <img src={team2} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title blog-title">Harly Rayan</h5>
                <p class="card-text blog-title">Electrician</p>
                <i class="fab fa-facebook me-2 blog-title"></i>
                <i class="fab fa-twitter me-2 blog-title"></i>
                <i class="fab fa-instagram blog-title"></i>
              </div>
            </div>
          </div>
          <div class="col blog-card">
            <div class="card h-100">
              <img src={team3} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title blog-title">Andrew Bon</h5>
                <p class="card-text blog-title">Cleaner</p>
                <i class="fab fa-facebook me-2 blog-title"></i>
                <i class="fab fa-twitter me-2 blog-title"></i>
                <i class="fab fa-instagram blog-title"></i>
              </div>
            </div>
          </div>
          <div class="col blog-card">
            <div class="card h-100">
              <img src={team4} class="card-img-top h-75" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title blog-title">Tom Harry</h5>
                <p class="card-text blog-title">Wire Desiner</p>
                <i class="fab fa-facebook me-2 blog-title"></i>
                <i class="fab fa-twitter me-2 blog-title"></i>
                <i class="fab fa-instagram blog-title"></i>
              </div>
            </div>
          </div>
          <div class="col blog-card">
            <div class="card h-100">
              <img src={team5} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title blog-title">Maya Morgan</h5>
                <p class="card-text blog-title">Painter</p>
                <i class="fab fa-facebook me-2 blog-title"></i>
                <i class="fab fa-twitter me-2 blog-title"></i>
                <i class="fab fa-instagram blog-title"></i>
              </div>
            </div>
          </div>
          <div class="col blog-card">
            <div class="card h-100">
              <img src={team6} class="card-img-top" alt="..." />
              <div class="card-body text-center">
                <h5 class="card-title blog-title">Jack Karter</h5>
                <p class="card-text blog-title">Carpenter</p>
                <i class="fab fa-facebook me-2 blog-title"></i>
                <i class="fab fa-twitter me-2 blog-title"></i>
                <i class="fab fa-instagram blog-title"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGreatTeam;
