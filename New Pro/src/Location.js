import React from 'react'
import { Link } from 'react-router-dom';
import './App.css' 
function Location () {
  const [showNavbar, setShowNavbar] = React.useState(false);
  return (
    <div>    
     <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-32.png"
              id="pole"
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <nav class="navbar navbar-expand-lg navbar-light">
              <div class="container-fluid">
                <button
                  className="navbar-toggle"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {showNavbar ? (
                    <i className="fa-solid fa-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-bars"></i>
                  )}
                </button>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div
                    className={`navbar-collapse ${showNavbar ? "show" : ""}`}
                  >
                    <div class="dropdown" id="mob">
                    <div className="know"> 
                      <Link to='/Solution'><button
                        className="btn btn dropdown-toggle"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Solutions
                      </button></Link>
                      </div>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item">
                            Workforce Augmentation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            IT Services
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            Enterprise Solutions{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            {" "}
                            AI Augmentation
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown">
                     <Link to ='/Industries'><button
                        class="btn btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Industries
                      </button></Link>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item">
                            Information Technology
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            Telecommunication
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            Automotive{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            {" "}
                            Oil & Energy
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            Pharmaceuticals
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            Banking & Finance
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Staffing
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item">
                            Candidates
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            Clients
                          </a>
                        </li>
                      </ul>
                    </div>
                    <Link to='/Location'><ul className="lol">
                      <li class="nav-item ">
                        <a class="nav-link"  id="stay">
                          Locations
                        </a>
                      </li>
                    </ul>
                    </Link>

                    <button className="btn btn" id="but">
                      Get&nbsp;In&nbsp;Touch
                    </button>
                    </div>
                    </div>
                    </div>
            </nav>
            </div>
            </div>
            </div> 
    <div id='hit' className='mt-4'>
    <h1 className='gun mt-5' id='tool'>Industries</h1></div>
    <li></li><h5 className='text-center mt-4'>USA</h5>
    <h5 className='text-center'>INDIA</h5>
       <div className='mt-5'> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.431647964311!2d78.38488300838243!3d17.43904240125066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fb72904c39%3A0xce1c7fa3bd2af39c!2sLogic%20Planet%20IT%20Services!5e0!3m2!1sen!2sin!4v1720297893071!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
       <div className='mt-5'> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.431647964311!2d78.38488300838243!3d17.43904240125066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93fb72904c39%3A0xce1c7fa3bd2af39c!2sLogic%20Planet%20IT%20Services!5e0!3m2!1sen!2sin!4v1720297893071!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>

        <div id='face'>
    <div className='container mt-5'>
    <div className='row'>
    <div className='col-sm-12 col-md-2 col-lg-2 mt-5'>
    <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/image-18.png'></img>
    <h6 className='mt-3 text-light' id='process'>
Connect:
  <i class="fa-brands fa-facebook me-1"></i>
<i class="fa-brands fa-linkedin me-1"></i>
<i class="fa-brands fa-instagram"></i>
</h6>
        </div>
        <div className='col-sm-12 col-md-3 col-lg-3 text-light'>
        <h5 id='skill' className='text-center'>Global Offices / Locations</h5>
       <h6 id='process' className='text-light getting'> <i class="fa-solid fa-location-dot" id='fit'></i>  New Jersey Office
4525 Route 27, Princeton,</h6><h6> NJ 08540
Phone: 732-512-0009
Mail: info@logicplanet.com</h6>
        </div>
        <div className='col-sm-12 col-md-3 col-lg-3 mt-5 text-light'>
            <h6 id='process' className='text-light getting'>  <i class="fa-solid fa-location-dot" id='fit'></i> Michigan Office</h6>
<h6>250 Monroe NW, Suite 400, Grand Rapids, Michigan, 49503, United States of America
Phone: 616-717-5787
Mail: info@logicplanet.com</h6>
        </div>
        <div className='col-sm-12 col-md-2 col-lg-2 mt-5 text-light'>
            <h6 id='process' className='text-light getting'>  <i class="fa-solid fa-location-dot" id='fit'></i> Hyderabad, India Office</h6>
<h6>4th Floor, Unit # D 1, D No : 1-89/A/8/C/2, Vittal Rao Nagar, Madhapur, Hyderabad-500081 Telangana State.
Phone: 040-49901212
Mail: info@logicplanet.com</h6>
            </div> 
            <div className='col-sm-12 col-md-2 col-lg-2 mt-5 text-light'>
            <h6 id='process' className='text-light getting'>  <i class="fa-solid fa-location-dot" id='fit'></i> Gurugram, India Office</h6>
<h6>Unit 002 Ground Floor, Tower C, Unitech Cyber Park, Sector 39, Gurugram, Haryana -122003
Phone: 0124-6831814
Mail: info@logicplanet.com</h6>
</div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Location