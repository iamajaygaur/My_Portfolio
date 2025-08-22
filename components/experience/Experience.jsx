/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './experience.css';

const Experience = () => {
    const[toggleState, setToggleState] = useState(false);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div className="section experience section" id="experience">
        <h2 className="section__title">Experience 💼</h2>
        <span className="section__subtitle">What I work as</span>

        <div className="exp__container container grid">
            <div className="exp__content">
                <div>
                    <i className="uil uil-web-grid exp__icon"></i>
                    <h3 className="exp__title">Technical IT Support<br /> Engineer </h3>
                </div>

                <div>
                    <span className="exp__comp">Concentrix</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 1 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Technical IT Support Engineer<br/> Feb'25 - July'25</h3>
                        <p className="exp__modal-description">Worked in IT support at Concentrix, managing system reliability, automating maintenance tasks, and streamlining onboarding processes to improve operational efficiency and productivity.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I manage IT systems, ensuring reliability, security, and smooth operation.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I provide technical support, troubleshoot issues, and resolve tickets efficiently.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I streamline onboarding and maintenance processes to improve overall productivity.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">DevOps<br />Trainee</h3>
                </div>

                <div>
                    <span className="exp__comp">Thinking Hut IT Solution's</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 2 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">DevOps Trainee <br /> Sep'23 - Oct'24</h3>
                        <p className="exp__modal-description">Worked as a DevOps Trainee at Thinking Hut IT Solutions, collaborating with an international team to design, implement, and maintain scalable infrastructure, CI/CD pipelines, and automated deployment solutions for web applications.</p>
                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I design, implement, and maintain scalable infrastructure and cloud environments.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I automate deployments and CI/CD pipelines to ensure reliable software delivery.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">I monitor systems and streamline operations to improve performance and efficiency.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className="exp__content">
                <div>
                    <i className="uil uil-arrow exp__icon"></i>
                    <h3 className="exp__title">Django Developer<br />Intern</h3>
                </div>

                <div>
                    <span className="exp__comp">Elite Softwares</span>
                </div>

                <span className="exp__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right exp__button-icon"></i></span>

                <div className={toggleState === 3 ? "exp__modal active-modal" : "exp__modal"}>
                    <div className="exp__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times exp__modal-close"></i>

                        <h3 className="exp__modal-title">Django Developer Intern <br /> Apr'23 - Sep'23</h3>
                        <p className="exp__modal-description">Worked as a Python-Django Intern at Elite Softwares, developing full-stack applications, deploying server-side projects, automating processes, and streamlining environment setup to improve efficiency and project delivery.
                        </p>

                        <ul className="exp__modal-experiences grid">
                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Developed full-stack applications using Python-Django and front-end technologies like HTML, CSS, Bootstrap, and React.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Deployed server-side projects and automated workflows to improve efficiency and streamline processes.</p>
                            </li>

                            <li className="exp__modal-experience">
                                <li className="uil uil-check-circle exp__modal-icon"></li>
                                <p className="exp__modal-info">Collaborated with the team to set up environments and ensure smooth project delivery.</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience