import React from 'react';
import avatar from './image/avatar.png'
import Image from 'react-bootstrap/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Test extends React.Component {

    render() {
        return (
        <div>
            <div class="container d-flex align-items-center flex-column mt-3">
                <div style={{width:200}}>
                    <Image thumbnail roundedCircle src={avatar} fluid />
                </div>
                <h1 class="masthead-heading text-uppercase mb-0">KHANH HOANG</h1>
                <h3>Junior Web/Software Developer / <a href="mailto:khanhhvm@gmail.com">khanhhvm@gmail.com</a></h3>
                <div class="divider-custom ">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><FontAwesomeIcon icon={faCoffee} /></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="text-start">
                    <p class="font-weight-light mb-0">Hi, I'm Khanh. I am an aspiring web and software developer with a passion for creating user-friendly and innovative solutions. I recently graduated from Seneca College with a degree in Bachelor of Software Development.</p>
                    <p class="font-weight-light mb-0">I'm excited to bring my creativity and technical expertise to meaningful projects and am eager to continue learning and growing in this ever-evolving field.</p>
                    <p class="font-weight-light mb-0">Let's connect and build something amazing together!</p>
                </div>
            </div>

            <div class="divider-custom ">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><FontAwesomeIcon icon={faCoffee} /></div>
                <div class="divider-custom-line"></div>
            </div>

            <div className="resume-section-content">
                <h1 className="mb-0">
                    3D Animation - my newest project
                </h1>
                <div className="subheading mb-2">
                    Actor: Nicholas, Khanh
                </div>
                <p className="lead mb-2 text-sm"> A short video about 3D Animation. It created by 3DSMax application to demonstrate my 3D skills.</p>

            </div>
                      
        </div>
        );
    }
}

export default Test;