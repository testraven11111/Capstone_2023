import React from 'react';
import { Link } from 'react-router-dom';
import Jerry from '../assets/img/jerry.jpeg';
import Rangga from '../assets/img/rangga.jpeg';
import Dina from '../assets/img/dina.jpeg';
import Galih from '../assets/img/galih.jpeg';

const About = () => {
  return (
    <div className="main">
      <div className="profile-card">
        <div className="img">
          <img src={Jerry} alt="" />
        </div>
        <div className="caption">
          <h3>Jerry Huwae</h3>
          <p>Fullstack Developer</p>
          <p className="univ">Universitas Kristen Indonesia Maluku</p>
          <div className="social-links">
            <Link className="fb" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="ig" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="linkedin" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Rangga} alt="" />
        </div>
        <div className="caption">
          <h3>Rangga Prayoga</h3>
          <p>Front End Developer</p>
          <p className="univ">IPB University</p>
          <div className="social-links">
            <Link className="fb" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="ig" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="linkedin" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Dina} alt="" />
        </div>
        <div className="caption">
          <h3>Maulidina Maulani</h3>
          <p>Back End Developer</p>
          <p className="univ">Politeknik Negeri Banjarmasin</p>
          <div className="social-links">
            <Link className="fb" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="ig" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="linkedin" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
          <img src={Galih} alt="" />
        </div>
        <div className="caption">
          <h3>Galih Tripambudi</h3>
          <p>Back End Developer</p>
          <p className="univ">Politeknik Negeri Banjarmasin</p>
          <div className="social-links">
            <Link className="fb" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="ig" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
            <Link className="linkedin" to="https://www.linkedin.com/in/jerry-huwae-7702431b6/"></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
