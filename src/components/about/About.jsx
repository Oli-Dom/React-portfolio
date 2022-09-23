import React from 'react';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GiSandsOfTime } from 'react-icons/gi';
import { IoIosPeople } from 'react-icons/io';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5> Get to know me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiSandsOfTime className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className="about_card">
              <IoIosPeople className="about_icon" />
              <h5>Clients</h5>
              <small>N/A</small>
            </article>

            <article className="about_card">
              <AiOutlineFolderOpen className="about_icon" />
              <h5>projects</h5>
              <small>N/A</small>
            </article>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              voluptatibus debitis, ab eveniet ullam amet non ducimus quam
              voluptates quod cumque, impedit atque nisi vitae iusto earum
              inventore expedita cupiditate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
