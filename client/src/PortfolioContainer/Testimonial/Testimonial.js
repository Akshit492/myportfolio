import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Testimonial.css';
import UOF from '../../../src/img/testimonial/UOF.png';
import linkedin from '../../../src/img/testimonial/linkedin.png'
import ut from '../../../src/img/testimonial/ut.png'
import php from '../../../src/img/testimonial/php.png'


import shape from "../../../src/assets/Testimonial/shape-bg.png";
export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    const options={
      loop: true,
      margin:0,
      nav: true,
      animateIn: "bounceInRight",
      animateOut: "bounceOutRight",
      dots: true,
      autoplay: true,
      smartSpeed: 1000,
      responsive:{
        0:{
          items:1,
        },
        768:{
          items:1,
        },
        1000:{
          items:3,
        },
      },
    };

  return (
    <div>
      <ScreenHeading
        title={"My Works"}
        subHeading={"Some Other Certifications and Projects"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel className="owl-carousel" id="testimonial-carousal" {...options} >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      An online certification course of Python from Coursera
                      platform offered by University Of Michigan.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className='stars list-unstyled'>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt"/>
                          </li>  
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          </ul>
                  </div>
                  <div className="client-info">
                    <img src={UOF}
                    alt="BAD NETWORK"
                    ></img>
                    <h5>Python For Everybody</h5>
                    <p> University Of Michigan</p>
                    </div>
                </div >
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      A course to enrich your thinking capacity and add valuable skills like creative and critical thinking.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className='stars list-unstyled'>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          </ul>
                  </div>
                  <div className="client-info">
                    <img src={linkedin}
                    alt="BAD NETWORK"
                    ></img>
                    <h5> Creative and Critical Thinking</h5>
                    <p>LinkedIn Learning</p>
                    </div>
                </div >
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      Mindfulness has become a life-style choice .Mindfulness acts as a means of enhancing well-being and happiness. 
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className='stars list-unstyled'>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          </ul>
                  </div>
                  <div className="client-info">
                    <img src={ut}
                    alt="BAD NETWORK"
                    ></img>
                    <h5>De-Mystifying Mindfulness </h5>
                    <p>Universiteit Leiden</p>
                    </div>
                </div >
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left"/>
                      A survey form to collect data. Maintain a count and focus on states with less vaccinatation percentage.
                      <i className="fa fa-quote-right"/>
                    </p>
                    <ul className='stars list-unstyled'>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          <li>
                            <i className="fa fa-star-half-alt"/>
                          </li>
                          <li>
                            <i className="fa fa-star"/>
                          </li>
                          </ul>
                  </div>
                  <div className="client-info">
                    <img src={php}                    alt="BAD NETWORK"
                    ></img>
                    <h5>Project:- Vaccination Survey</h5>
                    <p>PHP</p>
                    </div>
                </div >
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="weak Network"/>
        </div>
    </div>
  );
}
