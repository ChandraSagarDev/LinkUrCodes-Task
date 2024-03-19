import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div>

<Navbar/>
      <div className="container">

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <ul class="nav justify-content-center">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Marketing</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Design</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">IT & Software</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Personal Development</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Finance & Accounting</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Office Productivity</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div id="carouselExampleCaptions" class="carousel slide">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/22f3382b-bf54-48e0-9b0d-0e4f562948ab.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Get Udemy at work</h5>
                    <p>Udemy Business is an all-in-one learning platform perfect for companies of all sizes.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/a4978aa7-e7dc-43d8-a76e-65a14cf84445.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Make the right decision</h5>
                    <p>Improve your insights with data science. Explore popular courses.</p>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="https://img-c.udemycdn.com/notices/featured_carousel_slide/image/542775ce-985d-4103-8f86-1bfc28afb29d.jpg" class="d-block w-100" alt="..." />
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Get back on track</h5>
                    <p>Achieve your goals. 5–10 minutes a day will do.</p>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

          </div>
        </div>
        <br />

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <h2><b>What to learn next?</b></h2>
            <div class="card mb-3" >
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="https://img-c.udemycdn.com/course/480x270/1228490_9cb9.jpg" class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">Java for Absolute Beginners</h5>
                    <p class="card-text">A course on Java for complete beginners to computer programming, for those who want concepts explained in plain English.</p>
                    <p class="card-text"><small class="text-body-secondary">Last updated 09/2022</small></p>
                  </div>
                </div>
              </div>
            </div>

            <h2><b>Recommended for you</b></h2>

          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">

            <div class="card" >
              <img src="https://i.ytimg.com/vi/gYVwah-Plmo/maxresdefault.jpg" class="card-img-top" alt="..." height="170px" />
              <div class="card-body">
                <h5 class="card-title">Web Development Bootcamp</h5>
                <p class="card-text">HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                <a href="#" class="btn btn-primary">Enroll</a>
              </div>
            </div>

          </div>


          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <img src="https://www.wemakescholars.com/uploads/blog/TopprofessionalITcoursetopursueincollege.jpg" class="card-img-top" alt="..." height="170px" />
              <div class="card-body">
                <h5 class="card-title">Prompt & AI Engineering</h5>
                <p class="card-text">Prompt Engineering & Artificial Intelligence Certification</p>
                <a href="#" class="btn btn-primary">Enroll</a>
              </div>
            </div>
          </div>
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <div class="card">
              <img src="https://www.cheggindia.com/wp-content/uploads/2022/09/Top-12-IT-Courses-That-Will-Help-You-Stand-Out.png" class="card-img-top" alt="..." height="170px" />
              <div class="card-body">
                <h5 class="card-title">Data Science</h5>
                <p class="card-text">Prompt Engineering & Artificial Intelligence Certification</p>
                <a href="#" class="btn btn-primary">Enroll</a>
              </div>
            </div>

          </div>
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"><div class="card">
            <img src="https://www.computersciencedegreehub.com/wp-content/uploads/2023/01/shutterstock_318368642-2-scaled.jpg" class="card-img-top" alt="..." height="170px" />
            <div class="card-body">
              <h5 class="card-title">Big Data</h5>
              <p class="card-text">Big Data Programming Languages, become a Big Data Professional</p>
              <a href="#" class="btn btn-primary">Enroll</a>
            </div>
          </div></div>
        </div>
        <br />
        <h2><b>Popular Topics</b></h2>
        <br />

        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Python</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>data Science</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Machine Learning</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Flask</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Web Scraping</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Management Skills</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Leadership</button></div>
          <div className="col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2"><button type="button" class="btn btn-outline-dark" disabled>Project Management</button></div>
        </div>
        <br />

        <center><nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav></center>

<br />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"><nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">Udemy Business</a>
            <a class="nav-link" href="#">Teach on Udemy</a>
            <a class="nav-link" href="#">Get the app</a>
            <a class="nav-link">About Us</a>
          </nav></div>
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"><nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">Careers</a>
            <a class="nav-link" href="#">Blog</a>
            <a class="nav-link" href="#">Help and Support</a>
            <a class="nav-link">Contact us</a>
          </nav></div>
           <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3"><nav class="nav flex-column">
            <a class="nav-link active" aria-current="page" href="#">Terms</a>
            <a class="nav-link" href="#">Privacy Policy</a>
            <a class="nav-link" href="#">Cookie Settings</a>
            <a class="nav-link">Site Map</a>
          </nav></div>
          <div className="col col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
            <br />
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt=""  height="100px" />
          </div>
        </div>


      </div>




    </div>
  )
}

export default Home