import React from 'react';
import { BiCheckSquare } from 'react-icons/bi';
import './skills.css';

const Skills = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>BootStrap</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>React</h4>
                <small>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small>Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>MySQL</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="experience_details">
              <BiCheckSquare className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills
