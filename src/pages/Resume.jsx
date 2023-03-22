import React, { useEffect } from "react";

export const Resume = ({ data }) => {
  useEffect(() => {
    const printButton = document.querySelector(`.print-button`);
    printButton.addEventListener(`click`, () => window.print());
  }, []);

  return (
    <section>
      <h3>Curriculum Vitae</h3>
      <h2>{data.bio[0].name}</h2>
      <address>
        {data.bio[0].contacts.city}, {data.bio[0].contacts.state}
        <br />
        {data.bio[0].contacts.email}
        <br />
        {data.bio[0].contacts.phone}
        <br />
      </address>
      <h3>work experience</h3>
      <ul>
        {data.works.map((work) => (
          <li key={work.id}>
            <h4>
              {work.company},
              <span>
                ({work.where}, {work.when})
              </span>
            </h4>
            <p>
              {work.occupation} <br />
              {work.description}
            </p>
            {work.skills.map((skill) => (
              <span className="skill" key={skill}>
                {skill}
              </span>
            ))}
          </li>
        ))}
      </ul>
      <a href="#" className="button-link print-button">
        print cv
      </a>
    </section>
  );
};
