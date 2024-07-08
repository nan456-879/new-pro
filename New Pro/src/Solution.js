import React from 'react'
import './App.css' 
const Solution = () => {
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
                    <ul className="lol">
                      <li class="nav-item ">
                        <a class="nav-link"  id="stay">
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
           <div id='media'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="logic.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Plant.jpeg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="Stay.jpeg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-7 col-lg-7 mt-3'>
    <h1 id='tool'>Hire right for an ever-changing
    digital world </h1>
    <h6 id='world' className='mt-3'>Did you know that a whopping 88% of companies worldwide are tapping into the power of AI in their hiring processes, cutting down hiring costs by roughly 75%? Imagine a world where your hiring needs are met with pinpoint precision – our groundbreaking approach isn’t just a response to industry trends; it’s a game-changer backed by data.</h6>
  
    <h6 id='world'>AI isn’t just a tool; it’s your strategic partner, and our digital transformation takes you leaps ahead, ensuring a staggering 44% boost in candidate screening efficiency. It’s the perfect blend of human expertise and AI brilliance, crafting a hiring ecosystem that’s not just effective, but genuinely groundbreaking.</h6>
    </div>
    <div className='col-sm-12 col-md-5 col-lg-5'>
    <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/Group-1.png' width={'100%'} height={'400px'}></img>
    </div>
    </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-6' id='with'>
        <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/6548442-1-1.png' width={'100%'} height={'400px'}></img>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 mt-3'>
            <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/Group-9013-1.png' width={'128%'} height={'100px'}></img>
            <h1 id='tool' className='mt-3'>Embrace the change with AI</h1>
            <h6 id='world' className='mt-3'>Elevate your hiring game with our cutting-edge AI-powered contingent hiring solutions. From simplifying resume screening to harnessing predictive analytics, our AI-driven approach guarantees swift, impartial recruitment.</h6>

            <h6 id='world' className='mt-3'>86% of recruiters believe that using ATS Machine Learning speeds up the hiring process significantly.</h6>

            <h6 id='world'>Experience personalized interactions, automated interviews, and data-powered decision-making that catapults your hiring strategy into the future. Embrace a seamless fusion of human expertise and AI innovation, forging a dynamic and globally competitive workforce with Logic Planet.</h6>
            </div>
        </div>
        </div>
        <div className='store mt-3'>
        <h1 className='text-center queen' id='force'>Your Vision. Our Solution.</h1>
        <div className='container text-center mt-5 price'>
        <div className='row'>
        <div className='col-sm-12 col-md-4 col-lg-4 mt-3'>   
        <h6 id='AI'>Workforce Augmentation</h6>
        </div>
        <div className='col-sm-12 col-md-3 col-lg-3 mt-3'>
        <h6  id='pie'>AI augmentation</h6>
        </div>
        <div className='col-sm-12 col-md-3 col-lg-3 mt-3'>
        <h6 id='pie'>Enterprise Solution</h6>
        </div>
        </div>
        </div>
        <div className='container mt-5'>
    <div className='row'>
    <div className='col-sm-12 col-md-7 col-lg-7 mt-4' >
        <h1 id='force'>Workforce needs, met right!</h1>
        <h6 id='world' className='mt-3'>Enterprises frequently demand a tailored solution that effectively addresses their vast hiring requirements, encompassing innovative enterprise solutions that streamline the entire recruitment process. Logic Planet provides a personalized approach, complemented by mobile recruiting apps and cutting-edge recruitment marketing tools, to craft a data-driven, efficient, and engaging talent acquisition process that caters to your unique needs.</h6>
        <button className='btn btn-' id='need' >Know More</button>
        </div>
        <div className='col-sm-12 col-md-5 col-lg-5 cannot'>
        <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/undraw_working_re_ddwy-1.png' width={'100%'} height={'300px'}></img>
        </div>
        </div>
        </div>
        </div>
        <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-5 col-lg-5 mt-4'>
        <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/6876640-2.png' width={'100%'} height={'400px'}></img>
        </div>
        <div className='col-sm-12 col-md-7 col-lg-7 mt-4'>
            <h1 id='tool'>Into the digital transformation</h1>
            <h6 id='world' className='mt-3'>Welcome to the future of hiring – where innovation and talent collide! At Logic Planet, we’re not just recruiters; we’re architects of your workforce’s digital transformation. Wave goodbye to cumbersome processes and say hello to unparalleled efficiency, as we effortlessly blend cutting-edge technologies such as AI, ATS, and collaborative tools into the mix. Our online recruitment platforms and mobile-friendly approach ensure that your dream team is just a click away. With data analytics steering the ship and video interviews shattering geographical barriers, we’re rewriting the rulebook on hiring experiences. Join us at the crossroads of innovation and recruitment excellence, where the future of talent awaits.</h6>
        </div>
        </div>
    </div>
    <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-6 mt-5'>
        <h1 id='tool'>Helping Businesses to
        hire better and faster.</h1>

        <h6 id='world' className='mt-3'>Say goodbye to staffing challenges with our expert team, AI-driven processes, and Digital Transformation solutions. We empower businesses to hire better and faster, ensuring a seamless and efficient recruitment journey. Elevate your workforce with Logic Planet’s innovative solutions today!</h6>
        <button className='btn btn' id='need'>Know More</button>
        </div>
        <div className='col-sm-12 col-md-6 col-lg-6 mt-4'>
        <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/6876640-1.png' width={'100%'} height={'400px'}></img>
        </div>
        </div>
        </div>
        <h1 className='gun mt-5' id='tool'>A journey through time!</h1>
        <img src='https://www.logicplanet.com/wp-content/uploads/2024/02/585435850-web-graph.png'></img>
        <br/>
        <div className='fast'>
        <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-8 col-lg-8 mt-4'>
    <h2 id='setting'>Hiring that is</h2>
<h2 id='setting'>Fast.</h2>
 <h2 id='setting'>Fair.</h2>
<h2 id='setting'>Precise.</h2>
<br/>
<h6 id='world'>Logic Planet proudly stands as a trailblazer, setting remarkable benchmarks in the ever-evolving hiring landscape. Our mission is crystal clear: to empower businesses to enhance their productivity and profitability by strategically selecting the perfect candidates.</h6>
<h6 id='world'>Experience the transformative impact that Logic Planet can have on your hiring strategies. Witness an impressive surge of over 50% in your hiring funnel, a testament to our unwavering commitment to expanding your talent pool with exceptionally qualified individuals. But our innovative approach doesn’t stop at quantity; we’re here to redefine the efficiency of the entire hiring process. From streamlined candidate sourcing to cutting-edge evaluation methodologies, Logic Planet is your trusted partner in shaping a workforce that not only meets but exceeds expectations, fueling sustained growth and success for your organization</h6>
        </div>
        <div className='col-sm-12 col-md-4 col-lg-4' id='row'>
            <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/Group-7.png' width={'100%'} height={'400px'}></img>
            </div>
        </div>
        </div>
        </div>
        <div className='container'>
    <div className='row'>
    <div className='col-sm-12 col-md-6 col-lg-6 mt-5'>
  <h1 id='tool'>Our process</h1>
  <div className='system'><h6 id='skill' className='mt-4 text-center'>AI-Powered Skill Identification:</h6>
   <h6 id='process' className='text-center'>Utilize advanced AI algorithms the precisely identify candidates with necessary skills  contingent roles.</h6>
    <br/></div>
  <div id='offer'><h6 id='skill' className='mt-4 text-center'>Efficient ATS Management</h6>
    <h6 id='process' className='text-center'>Streamline recruitment process leveraging  Applicant Tracking System (ATS)organized candidate tracking and workflow efficiency.</h6>
    <br/></div>
    <div id='offer'><h6 id='skill' className='mt-4 text-center'>Automated Interview Scheduling</h6>
    <h6 id='process' className='text-center'>Enhance candidate experienceautomated tools for seamless interview scheduling, minimizing delays and ensuring flexibility.</h6>
    <br/></div>
    <div id='offer'><h6 id='skill' className='mt-4 text-center'>Swift Offer Letter Deployment</h6>
    <h6 id='process' className='text-center'>Expedite the offer pro through automated systems, swiftly generating and delivering offer letters for a smooth onboarding experience.</h6>
    </div></div>
    <div className='col-sm-12 col-md-6 col-lg-6' id='row'>
    <img src='https://www.logicplanet.com/wp-content/uploads/2023/12/5362885-1.png' width={'100%'} height={'400px'}></img>
    </div>
    </div>
    </div>
    <div id='work'>
    <div className='container mt-4'>
    <div className='row'>
    <div className='col-sm-12 col-md-7 col-lg-7 mt-4'>
    <h1 id='tool' className='text-light'>In the end, it is all about people.</h1>
    <h6 id='world' className='text-light'>At Logic Planet, we don’t just embrace the future; we sculpt it. Picture a hiring journey where innovation meets intuition, where data dances with human insight. We’re not merely matching trends; we’re defining them. It’s time to be a part of a hiring revolution that goes beyond CVs and interviews – join us in shaping careers and fostering connections that transcend the ordinary.</h6>
    </div>
    <div className='col-sm-12 col-md-5 col-lg-5'>
    <button className='btn btn-light we' id='red'>Get Started</button>
    </div>
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

export default Solution