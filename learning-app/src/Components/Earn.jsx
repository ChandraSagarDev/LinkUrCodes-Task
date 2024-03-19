import React from 'react'
import Navbar from './Navbar'

const Earn = () => {
    return (
        <div>
            <Navbar />
            <div className="container">

                <div className="row">

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <h1><b>Get your demo</b></h1>
                                <p>Tell us your needs and we’ll start on a custom plan to drive results.</p>
                                <br />
                                <p><b>With Udemy as your learning partner, you can:</b></p>
                                <ul>
                                    <li>Train your entire workforce with over 25,000+ courses in 15 languages</li>
                                    <br />
                                    <li> Prep employees for over 200 industry-recognized certification exams</li><br />
                                    <li>Develop highly skilled tech teams in risk-free practice environments</li> <br />
                                    <li>Identify emerging skills gaps, learning trends, and industry benchmarks </li><br />
                                    <li> Integrate content with your existing learning management system</li>
                                </ul>
                                <div className="row">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <br />
                                        <br />
                                        <h4><b>Trusted by</b></h4>
                                        <br />
                                        <img src="https://business.udemy.com/wp-content/uploads/2023/11/hpe-logo-11-2023.png" alt="" height="60px" />
                                        <img src="https://business.udemy.com/wp-content/uploads/2023/11/samsung-logo-11-2023.png" alt="" height="60px" />
                                        <img src="https://business.udemy.com/wp-content/uploads/2023/11/cisco-logo-11-2023.png" alt="" height="60px" />
                                        <img src="https://business.udemy.com/wp-content/uploads/2023/11/att-logo-11-2023.png" alt="" height="60px" />
                                    </div>
                                </div>
                            </div>







                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">First Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" /></div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Work Email</label>
                                        <input type="email" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Ph no.</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Location</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <br />
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Company Size</label>
                                        <input type="text" className="form-control" /></div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">No. of people to train</label>
                                        <input type="text" className="form-control" /></div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">job title</label>
                                        <input type="text" className="form-control" /></div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Job Level</label>
                                        <input type="text" className="form-control" /></div>
                                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-success">Submit</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                        <br />



                    </div>

                </div>

            </div>

        </div>

    )
}

export default Earn