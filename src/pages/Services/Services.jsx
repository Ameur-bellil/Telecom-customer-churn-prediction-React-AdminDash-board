import React from "react";
import './Services.css';

function Services ()  {
    return (
        <div className="service component__space" id="Services">
            <div className="heading">
                <h1 className="heading">Our Services</h1>
                <p className="heading p__color">
                    There are many variations of passages of Lorem Ipsum available,
                </p>
                <p className="heading p__color">
                    but the majority have suffered alteration,
                </p>
            </div>

            <div className="container">
                <div className="row">


                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Fiber Optic Internet</h1>
                                <p className="p service__text p__color">
                                Verizon Fios: Verizon's fiber optic internet service provides high-speed internet access<br></br>
                                 with speeds ranging from 100 Mbps to 940 Mbps (depending on the plan) 
                                using a fiber-to-the-home (FTTH) network.
                                </p>
                                
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">DSL (Digital Subscriber Line)</h1>
                                <p className="p service__text p__color">
                                AT&T DSL: AT&T offers DSL internet service that delivers internet access over existing telephone lines.<br></br>
                                 Speeds typically range from 5 Mbps to 100 Mbps, depending on the location and plan.

                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Cable Internet Service:</h1>
                                <p className="p service__text p__color">
                                Xfinity (Comcast): Xfinity offers cable internet service with speeds ranging from 25 Mbps to 2,000 Mbps (depending on the plan)<br></br>
                                . It uses coaxial cables to deliver high-speed internet access to residential and business customers.

                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Mobile Broadband Service</h1>
                                <p className="p service__text p__color">
                                AT&T Wireless: AT&T offers mobile broadband service through its 4G LTE and 5G networks,<br></br>
                                 providing high-speed internet access to smartphones,
                                 tablets, and mobile hotspots.

                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Satellite Internet Service:</h1>
                                <p className="p service__text p__color">
                                HughesNet: HughesNet is a satellite internet service provider that offers internet access to rural<br></br>
                                 and underserved areas where traditional wired broadband options are limited. Speeds typically range from 25 Mbps to 50 Mbps.

                                </p>
                            </div>
                         </div>
                    </div>

                    <div className="col__3">
                         <div className="service__box pointer">
                            <div className="icon">
                            <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                            </div>
                            <div className="service__meta">
                                <h1 className="service__text">Voice over Internet Protocol (VoIP) Service</h1>
                                <p className="p service__text p__color">
                                Skype: Skype is a popular VoIP service that allows users to make voice and video calls,<br></br>
                                 as well as send instant messages over the internet. It enables users to communicate with others worldwide using their computers, smartphones, or tablets.
                                
                                </p>
                            </div>
                         </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services;
 