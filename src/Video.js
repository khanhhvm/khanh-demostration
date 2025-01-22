import React from 'react';
import Container from 'react-bootstrap/Container';
import Ratio from 'react-bootstrap/Ratio';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

class Video extends React.Component {

    render() {
        return (
          <Container className="resume-section">
                {/* video 1 */}
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        3D Animation - my newest project
                    </h1>
                    <div className="subheading mb-2">
                        Creater: Khanh
                    </div>
                    <p className="lead mb-2 text-sm"> A short video to introduce my 3D Animation project. It created by 3DSMax application to demonstrate my 3D skills.</p>
                    <Ratio aspectRatio="16x9">
                      <iframe src="https://www.youtube.com/embed/zK31-VfDOyY?si=u1l8gKytxlRfe-Ss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Ratio>
                </div>

                <div className="divider-custom ">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FontAwesomeIcon icon={faYoutube} /></div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* video 2 */}
                <div className="resume-section-content">
                    <h1 className="mb-0">
                      Hand and Gesture Recognition Projec
                    </h1>
                    <div className="subheading mb-2">
                        Team: Khanh, Khushi
                    </div>
                    <p className="lead mb-2 text-sm"> A presentation about a Hand and Gesture Recognition Project. It created by OpenCV with Python to demonstrate Computer Vision course.</p>
                    <Ratio aspectRatio="16x9">
                      <iframe src="https://www.youtube.com/embed/-YmQHp5BZuY?si=Q-JvWxtOOmnTVWxJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Ratio>
                </div>

                <div className="divider-custom ">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FontAwesomeIcon icon={faYoutube} /></div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* video 3 */}
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Advertisement video
                    </h1>
                    <div className="subheading mb-2">
                        Actor: Nicholas, Khanh
                    </div>
                    <p className="lead mb-2 text-sm"> A short advertisement clip which was filmed and directed by my team. It presents our technical, creative, and organizational abilities.</p>
                    <Ratio aspectRatio="16x9">
                      <iframe src="https://www.youtube.com/embed/MaQNgSGjYBE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Ratio>
                </div>

                <div className="divider-custom ">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><FontAwesomeIcon icon={faYoutube} /></div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* video 4 */}
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Virtual Reality Project
                    </h1>
                    <div className="subheading mb-2">
                        Creater: Khanh
                    </div>
                    <p className="lead mb-2 text-sm"> A short video to present my Virtual Reality Project. The project was built on Unity Application</p>
                    <Ratio aspectRatio="16x9">
                      <iframe src="https://www.youtube.com/embed/7C0UMEt102w?si=x07er-6nKXck5uDr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Ratio>
                </div>

            </Container>
        );
      }
}

export default Video;