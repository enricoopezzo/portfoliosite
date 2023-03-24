import React, { useEffect } from "react";

export const Resume = ({ data }) => {
  useEffect(() => {
    const printButton = document.querySelector(`.print-button`);
    printButton.addEventListener(`click`, () => window.print());
  }, []);

  return (
    <section>
      <button className="button-link print-button">print cv</button>

      <h3 className="high">contacts</h3>
      <address>
        <div>
          {data.bio[0].contacts.city}, {data.bio[0].contacts.state}
          <br />
          {data.bio[0].contacts.email}
          <br />
          {data.bio[0].contacts.phone}
        </div>
        <div>
          {data.bio[0].contacts.website}
          <br />
          <a href={data.bio[0].contacts.linkedin} target="_blank" rel="noreferrer">{data.bio[0].contacts.linkedin.substring(data.bio[0].contacts.linkedin.indexOf(".") + 1)}</a>
          <br />
          <a href={data.bio[0].contacts.github} target="_blank" rel="noreferrer">{data.bio[0].contacts.github.substring(data.bio[0].contacts.github.indexOf(".") + 1)}</a>
        </div>
      </address>
      <hr />
      <h3 className="high">skills</h3>
      <ul>
        {data.bio[0].skills.map(skill => (
          <li className="skill">{skill}</li>
        ))}
      </ul>
      <div className="experience">
        <div className="work-experience">
          <h3 className="high">work experience</h3>
          <ul>
            {data.works.map((work) => (
              <li key={work.id}>
                <h4>
                  {work.company.toUpperCase()}, ({work.where}, {work.when})
                </h4>
                <p>
                  {work.occupation} <br />
                  {work.description}
                </p>
                {work.skills && (
                  <ul>
                    {work.skills.map((skill) => (
                      <li className="skill" key={skill}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
                <hr />
              </li>
            ))}
          </ul>
        </div>
        <div className="education">
          <h3 className="high">education</h3>
          <ul>
            {data.education.map((edu) => (
              <li key={edu.id}>
                <h4>
                  {edu.school.toUpperCase()} ({edu.where}, {edu.when})
                </h4>
                {edu.course}
                <br />
                {edu.description}
                <hr />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
