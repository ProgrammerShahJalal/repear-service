import React from "react";
import "./BlogAndNews.css";
import blog1 from "../../../images/blog1.jpg";
import blog2 from "../../../images/blog2.jpg";
import blog3 from "../../../images/blog3.jpg";
import blog4 from "../../../images/blog4.jpg";
import blog5 from "../../../images/blog5.jpg";
import blog6 from "../../../images/blog6.jpg";
const BlogsAndNews = () => {
  return (
    <>
      <div className="blog-container py-5">
        <div className="container mx-auto">
          <div className="row w-100">
            <div className="col-lg-4 col-md-4 col-sm-12 blogLine">
              <p>WORKING WITH EXCELLENT</p>
              <h2>Latest News & Blog</h2>
            </div>
            <div className="col-lg-5 col-md-4 col-sm-12 d-flex align-items-center">
              <div>
                <h6>
                  Boldman has 10+ years of experience with providing <br /> wide
                  area of specialty services works listed below.
                </h6>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 d-flex align-items-center">
              <a
                className="lineAnchor"
                href="#ourgreatteam"
                style={{ textDecoration: "none" }}>
                MORE NEWS &gt;&gt;
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col blog-card">
              <div class="card h-100">
                <img src={blog1} class="card-img-top p-3" alt="..." />
                <div class="card-body">
                  <p class="card-text blog-title">
                    <i class="fas fa-calendar-alt"></i> February 5, 2021
                  </p>
                  <h5 class="card-title blog-title">
                    Simple Steps for Replacing old Tiling
                  </h5>
                </div>
              </div>
            </div>
            <div class="col blog-card">
              <div class="card h-100">
                <img src={blog2} class="card-img-top p-3" alt="..." />
                <div class="card-body ps-">
                  <p class="card-text blog-title">
                    <i class="fas fa-calendar-alt"></i> April 10, 2021
                  </p>
                  <h5 class="card-title blog-title">
                    Dangers of Having High Water Pressure
                  </h5>
                </div>
              </div>
            </div>
            <div class="col blog-card">
              <div class="card h-100">
                <img src={blog3} class="card-img-top p-3" alt="..." />
                <div class="card-body">
                  <p class="card-text blog-title">
                    <i class="fas fa-calendar-alt"></i> March 9, 2021
                  </p>
                  <h5 class="card-title blog-title">
                    When have a problem with Cracked Pipes
                  </h5>
                </div>
              </div>
            </div>
            <div class="col blog-card">
              <div class="card h-100">
                <img src={blog4} class="card-img-top p-3" alt="..." />
                <div class="card-body">
                  <p class="card-text blog-title">
                    <i class="fas fa-calendar-alt"></i> November 27, 2021
                  </p>
                  <h5 class="card-title blog-title">
                    When have a problem with Cracked Pipes
                  </h5>
                </div>
              </div>
            </div>
            <div class="col blog-card">
              <div class="card h-100">
                <img src={blog5} class="card-img-top p-3" alt="..." />
                <div class="card-body">
                  <p class="card-text blog-title">
                    <i class="fas fa-calendar-alt"></i> July 7, 2021
                  </p>
                  <h5 class="card-title blog-title">
                    When have a problem with Cracked Pipes
                  </h5>
                </div>
              </div>
            </div>
            <div class="col blog-card">
              <div class="card h-100">
                <img src={blog6} class="card-img-top h-75 p-3" alt="..." />
                <div class="card-body">
                  <p class="card-text blog-title">
                    <i class="fas fa-calendar-alt"></i> Ferruary 14, 2021
                  </p>
                  <h5 class="card-title blog-title">
                    When have a problem with Cracked Pipes
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsAndNews;
