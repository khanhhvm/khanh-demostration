import React from 'react';

import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

const Education = () => {
   
    return (
        <div>
            {/* Experiences */}
            <Container className="resume-section" id="example4">
                <div className="resume-section-content">
                    <h1 className="mb-3">
                        Experiences
                    </h1>
                    
                    {/* 1 */}
                    <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <h4 className="mb-2">
                            <FontAwesomeIcon icon={faStar} /> C# Developer - Infostructure Technology Inc - Internship - Toronto, Canada
                        </h4>
                        <div className="flex-shrink-0"><span className="text-primary">Jan 2024 - Apr 2024</span></div>
                    </div>
                    
                    <ul>
                        <li>Collaborated with supervisor in the development of Child Care System: CRAFT.</li>
                        <li>Completed tasks such as creating new pages, modifying CSS styles, or fixing existing errors.</li>
                        <li>Updated Twilio API to the company project while maintaining current UX/UI features.</li>
                    </ul>
                    
                    <p className="mb-2 text-sm"><span className='badge text-bg-info'>Skill:</span> C# · CSS · HTML · Visual Studio</p>

                    <hr></hr>

                     {/* 2 */}
                     <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <h4 className="mb-2">
                            <FontAwesomeIcon icon={faStar} /> Junior Developer - Futuretalk Inc - Internship - Toronto, Canada
                        </h4>
                        <div className="flex-shrink-0"><span className="text-primary">May 2023 - Aug 2023</span></div>
                    </div>
                    
                    <ul>
                        <li>Investigated, and assisted team members to build a 3D VR Website project.</li>
                        <li>Implemented small React modules and completed fixing bug tickets.</li>
                        <li>Used GitHub to control branches and followed Monday's stand-up Sprint Review.</li>
                    </ul>
                    
                    <p className="mb-2 text-sm"><span className='badge text-bg-info'>Skill:</span> JavaScript · TypeScript · React · Three.js · Virtual Reality (VR)</p>
                    <hr></hr>

                     {/* 3 */}
                     <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <h4 className="mb-2">
                            <FontAwesomeIcon icon={faStar} /> Web Developer - Dai Phat Solution - HCM city, Vietnam
                        </h4>
                        <div className="flex-shrink-0"><span className="text-primary">Apr 2011 - Aug 2013</span></div>
                    </div>
                    
                    <ul>
                        <li>Designed and implemented databases using MySQL to support project requirements and ensure data integrity.</li>
                        <li>Developed responsive front-end webpages using HTML, translating Photoshop (PS) designs provided by the design team into functional user interfaces.</li>
                        <li>Integrated back-end functionalities by writing JavaScript for client-side interactions and C# for server-side logic, utilizing Visual Studio for efficient development.</li>
                    </ul>
                    
                    <p className="mb-2 text-sm"><span className='badge text-bg-info'>Skill:</span> HTML · CSS · ASP.NET · Visual Studio · MySQL · C#</p>

                    <div className="divider-custom ">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon={faCoffee} /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </Container>

            {/* Education */}
            <Container className="resume-section" id="example4">
                <div className="resume-section-content">
                    <h1 className="mb-3">
                        Education
                    </h1>
                    
                    {/* 1 */}
                    <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <h4 className="mb-2">
                            <FontAwesomeIcon icon={faStar} /> Seneca Polytechnic - Bachelor's degree - Computer Software Technology
                        </h4>
                        <div className="flex-shrink-0"><span className="text-primary">Jan 2022 - Sep 2024</span></div>
                    </div>
                    
                    <p className="mb-2 text-sm"><span className='badge text-bg-info'>Skill:</span>  JavaScript · C++ · Java · SQL · HTML · Python</p>

                    <hr></hr>

                    {/* 2 */}
                    <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <h4 className="mb-2">
                            <FontAwesomeIcon icon={faStar} /> Seneca Polytechnic - Diploma of Education - Computer Software Technology
                        </h4>
                        <div className="flex-shrink-0"><span className="text-primary">Sep 2019 - Dec 2020</span></div>
                    </div>
                    
                    <p className="mb-2 text-sm"><span className='badge text-bg-info'>Skill:</span>  JavaScript · C++ · Java · SQL · HTML · Python</p>

                    <hr></hr>

                    {/* 3 */}
                    <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <h4 className="mb-2">
                            <FontAwesomeIcon icon={faStar} /> University of Food Industry - Diploma of Education - Computer Software Technology
                        </h4>
                        <div className="flex-shrink-0"><span className="text-primary">2008 - 2011</span></div>
                    </div>
                    
                    <p className="mb-2 text-sm"><span className='badge text-bg-info'>Skill:</span> C# · C++ · Java · mySQL · HTML/CSS · Visual Studio</p>

                    <div className="divider-custom ">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><FontAwesomeIcon icon={faCoffee} /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                </div>
            </Container>

            {/* Certification */}
            <Container className="resume-section" id="example4">
                <div className="resume-section-content">
                    <h1 className="mb-3">
                        Certifications & Volunteer Experiences
                    </h1>

                    <ul>
                        <li>Virtual Reality Developer - 6-months Certification, Udacity.com.</li>
                        <li>Translator, Pop-up COVID vaccine clinic, Toronto, Ontario.</li>
                        <li>Support worker, Father J. Angus MacDonald Centre, Moncton, New Brunswick.</li>
                    </ul>
                    
                </div>
            </Container>
        </div>
    );
};

export default Education;