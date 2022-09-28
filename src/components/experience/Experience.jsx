import React from 'react';
import './experience.css';
const Experience = () => {
  return (
    <section id="services">
      <h2>Experience</h2>

      <div className="container experience_container">
        {/* Start of experience 1 */}
        <div>
          <article className="experience">
            <div className="experience_head">
              <h3>FinTech Focus</h3>
            </div>
            <ul className="experience_info">
              <li>
                <p>
                  Selected to participate in a 2-week program that trains
                  scholars in Python, in banking and finance, and more broadly
                  STEM careers
                </p>
              </li>

              <li>
                <p>Participated in virtual sessions with guest speakers</p>
              </li>
            </ul>
          </article>
        </div>
        {/* End of Experience 1 */}

        {/* Start of experience 2 */}
        <div>
          <article className="experience">
            <div className="experience_head">
              <h3>All Star Code</h3>
            </div>
            <ul className="experience_info">
              <li>
                <p>
                  Selected to participate in a 6-week program that trains
                  scholars web development
                </p>
              </li>

              <li>
                <p>
                  Collaborated with other students in order to create projects
                </p>
              </li>
            </ul>
          </article>
        </div>
        {/* End of Experience 2 */}
      </div>
    </section>
  );
};

export default Experience;
