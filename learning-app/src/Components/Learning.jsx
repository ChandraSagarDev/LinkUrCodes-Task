import React from 'react'
import Navbar from './Navbar'

const Learning = () => {
    return (
        <div>
            <Navbar />
            <div className="container">

                <br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <h1><b>My Learning</b></h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">All Courses</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Wishlist</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Archieved</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">Learning Tools</a>
                        </li>
                    </ul></div>
                </div>
                <br />
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-12 col-xl-4 col-xxl-4"><div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Sort by
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Recently Accessed</button></li>
                            <li><button class="dropdown-item" type="button">A-Z</button></li>
                            <li><button class="dropdown-item" type="button">Z-A</button></li>
                        </ul>
                    </div></div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-12 col-xl-4 col-xxl-4"><div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter by
                        </button>
                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">category</button></li>
                            <li><button class="dropdown-item" type="button">Progress</button></li>
                            <li><button class="dropdown-item" type="button">Instruction</button></li>
                        </ul>
                    </div></div>
                </div>

                <br />
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                        <div class="card">
                            <img src="https://www.clariwell.in/resources/best-java-certification-course-top-training-institute-in-pune.webp" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Java Course for complete beginners</h5>
                                <a href="#" class="btn btn-primary">Continue    </a>
                            </div>
                        </div>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://media.licdn.com/dms/image/D4D12AQFak_Q6wDNNWA/article-cover_image-shrink_720_1280/0/1696910396500?e=2147483647&v=beta&t=b5qW92qboWeecj4hnxghqYT7uwZ8yeBVNmLdSVb0xns" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Mastering ChatGPT</h5>
                                <a href="#" class="btn btn-primary">Continue    </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://ds6br8f5qp1u2.cloudfront.net/blog/wp-content/uploads/2021/03/7-Common-Types-of-Software-Testing@1x.png?x40138" class="card-img-top" alt="..." height="230" />
                            <div class="card-body">
                                <h5 class="card-title">Getting started with software testing</h5>
                                <a href="#" class="btn btn-primary">Continue    </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">                    <div class="card">
                        <img src="https://builtin.com/cdn-cgi/image/f=auto,quality=80,width=752,height=435/https://builtin.com/sites/www.builtin.com/files/styles/byline_image/public/2021-12/machine-learning-examples-applications.png" class="card-img-top" alt="..." height="235" />
                        <div class="card-body">
                            <h5 class="card-title">Introduction to machine learning</h5>
                            <a href="#" class="btn btn-primary">Continue    </a>
                        </div>
                    </div></div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <div class="card">
                            <img src="https://www.aalpha.net/wp-content/uploads/2019/10/Python-programming-india.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Python Programming for beginners</h5>
                                <a href="#" class="btn btn-primary">Continue    </a>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><div class="card">
                        <h5 class="card-header">Schedule Learning Time</h5>
                        <div class="card-body">
                            <p class="card-text">Learning a little each day adds up. Research shows that students who make learning a habit are more likely to reach their goals. Set time aside to learn and get reminders using your learning scheduler.</p>
                            <a href="#" class="btn btn-dark">Dismiss</a>
                        </div>
                    </div></div>
                </div>
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
                        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="" height="100px" />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Learning