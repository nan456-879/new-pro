import React from "react";
import "./App.css";
function Industries () {
  const [showNavbar, setShowNavbar] = React.useState(false);
  return (
    <div>
        <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-32.png"
              width={"35%"}
              id="pole"
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <button
                  className="navbar-toggle"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {showNavbar ? (
                    <i class="fa-solid fa-xmark"></i>
                  ) : (
                    <i class="fa-solid fa-bars"></i>
                  )}
                </button>
                <div className="col-sm-12 col-md-6 col-lg-6">
                     <div
                     className={`navbar-collapse ${showNavbar ? "show" : ""}`}
                   > 
                    <div class="dropdown" id="mob">
                      <div className="know">
                       <button
                          className="btn btn dropdown-toggle"
                          type="button"
                          id="stay"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Solutions
                        </button>
                        </div>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Workforce Augmentation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            IT Services
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Enterprise Solutions{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            AI Augmentation
                          </a>
                        </li>
                      </ul>
                      </div>

                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle"
                        href="#"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Industries
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Information Technology
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Telecommunication
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Automotive{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Oil & Energy
                          </a>
                          </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Pharmaceuticals
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
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
                          <a class="dropdown-item" href="#">
                            Candidates
                          </a>
                        </li>
                        <li>
                        <a class="dropdown-item" href="#">
                            Clients
                          </a>
                        </li>
                      </ul>
                    </div>
                   <ul className="lol">
                      <li class="nav-item ">
                        <a class="nav-link" href="#" id="stay">
                          Locations
                        </a>
                      </li>
                    </ul>
                   

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
          
    <div id='hit'>
    <h1 className='gun mt-5' id='tool'>Industries</h1></div>
    <br/>
   <h5 className='gun'>Logic Planet’s 22-Year Legacy</h5>
   <h1 className='gun' id='tool'>Bridging Talent and Industry</h1>
   <br/>
   <h1 className='text-center mt-5' id='tool'>Information Technology</h1>
   <br/>
   <div className='container mt-5'>
   <div className='row'>
   <div className='col-sm-12 col-md-6 col-lg-6'>
   <h4 id='tool'>Revolutionizing Information Technology Hiring With A Trailblazing Approach</h4>
   <h6 id='world'>In the fast-paced world of Information Technology, Logic Planet stands out as a trailblazer, redefining the parameters of contingent hiring. We understand that the IT landscape thrives on the ability of its professionals to adapt quickly to ever-evolving industry trends. At Logic Planet, we prioritize communication skills, cultural alignment, and the capacity to navigate the ever-changing tech terrain as the guiding principles in our IT recruitment strategy.</h6>
   <h6 id='world'>Our specialized team, composed of experts deeply immersed in the intricacies of the tech sector, ensures that each hire is not merely a skill match but a strategic fit for the industry’s forward trajectory. We’re not just hiring IT professionals; we’re forging connections that drive innovation and propel businesses towards a future of technological excellence.</h6>
   <button className='btn btn' id='need'>Know More</button>
   </div>
   <div className='col-sm-12 col-md-6 col-lg-6' id='row'>
   <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Rectangle-785.png' width={'100%'} height={'300px'}></img>
   </div>
   </div>
   </div>
   <h1 className='text-center mt-5' id='tool'>Telecomunications</h1>
   <h6 className='text-center' id='world'>In the expansive world of Telecommunications, Logic Planet</h6>
   <h6 className='text-center' id='world'>has honed its artistry in navigating the intricate web of connectivity.</h6>
   <button className='btn btn' id='need'>Know More</button>
   <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Group-9009-1536x734.png' width={'100%'} height={'400px'}></img>
   <br/>
   <div className='container'>
   <div className='row'>
   <div className='col-sm-12 col-md-5 col-lg-5' id='with'>
    <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Group-9010.png' width={'100%'} height={'400px'}></img>
    </div>
    <div className='col-sm-12 col-md-7 col-lg-7 mt-3'>
    <h1 id='tool'>Banking & Finance
    </h1>
    <h6 id='world'>Logic Planet’s legacy in the Banking and Finance sector is characterized by a strategic and nuanced approach to talent acquisition. In an industry where precision and expertise are paramount, the company adheres to the core principle that qualifications serve as the first parameter for scrutiny.</h6>
    <h6 id='world'>The financial landscape demands professionals who not only possess the necessary qualifications but also exhibit a profound understanding of the dynamic and ever-evolving financial markets. Logic Planet’s recruitment team, comprised of industry experts, navigates this delicate balance, ensuring that each placement is not just a match on paper but a harmonious integration into the intricate world of banking and finance.</h6>
    <button className='btn btn' id='need'>Know More</button>
   </div>
    </div>
    </div>
    <div id='work'>
    <div className='container mt-5'>
   <div className='row'>
   <div className='col-sm-12 col-md-4 col-lg-4'>
    <h1 id='tool' className='mt-4 text-light'>Pharmaceuticals</h1>
    <h6 id='world' className='text-light'>In the high-stakes arena of Pharmaceuticals, Logic Planet expertise in pinpointing and securing top-tier talent. Our hiring strategy in this sector is built upon core principles of technical excellence, deep understanding of regulatory compliance, a global perspective, and an unwavering commitment to quality. These principles serve as the foundation for our precision-driven approach to talent acquisition in the pharmaceutical industry.</h6>
    <button className='btn btn' id='need'>Know More</button>
    </div>
    <div className='col-sm-12 col-md-8 col-lg-8' id='with'>
    <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Ellipse-23.png' width={'30%'} height={'200px'}></img>
    <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Ellipse-24.png'  width={'30%'} height={'200px'}></img>
    <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Ellipse-25.png' width={'30%'} height={'200px'}></img>
    </div>
    </div>
   </div>
   </div>
   <div className='container mt-5'>
   <div className='row'>
   <div className='col-sm-12 col-md-6 col-lg-6'>
    <h1 id='tool'>Automotive</h1>
    <h6 id='world'>In the dynamic and ever-evolving world of the Automotive industry, Logic Planet has carved out a legacy marked by its unwavering dedication to talent excellence. Acknowledging that the automotive sector thrives on technical expertise, our core principles in this domain are custom-tailored to meet the distinctive demands of innovation and precision.</h6>
    <h6 id='world'>Logic Planet’s specialized recruitment team, deeply immersed in the intricacies of the automotive field, takes great care to ensure that each candidate not only aligns with the industry’s core principles but also actively contributes to the cutting-edge innovation that defines the automotive landscape. We’re not just recruiting for the automotive industry; we’re fueling its progress and driving it towards a future of technological</h6>
    <button className='btn btn' id='need'>Know More</button>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-6' id='row'>
    <img src='https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/image-37.png' width={'100%'} height={'400px'}></img>
    </div>
    </div>
    </div>
    <div className='container mt-5'>
   <div className='row'>
   <div className='col-sm-12 col-md-6 col-lg-6'>
    <h1 id='tool'>Oil & Energy</h1>
    <h6 id='world'>In the expansive and critical realm of Oil and Energy, Logic Planet stands out as a visionary force, meticulously aligning talent with the crucial task of energizing the future. The core principles that steer Logic Planet’s talent acquisition strategy in this sector revolve around technical proficiency, an in-depth understanding of regulatory compliance, a global outlook, and an unwavering commitment to quality. These principles serve as the guiding pillars of our approach to talent acquisition in the oil and energy industry, where precision and expertise are paramount.
</h6>
<button className='btn btn' id='need'>Know More</button>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-6'>
        <img src='https://img.freepik.com/free-vector/workers-oil-factory-flat-vector-illustration-men-people-uniform-fixing-broken-petroleum-pipeline-pipe-oilmen-working-together-industry-production-job-concept_74855-25414.jpg?t=st=1720297213~exp=1720300813~hmac=b549c42eeb65bf3349dd972f85bb83e3d72f3134c02a0d805728de9191a1ae59&w=740' width={'100%'} height={'400px'}></img>
        </div>
    </div>
   </div>
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

export default Industries