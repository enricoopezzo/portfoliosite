import React from 'react'

export const Projects = ({ data }) => {
  return (
    <section>
      <ul>
        {data.projects.map(item => (
          <li key={item.id}>
            <h4 className='high'>{item.title}</h4>
            <p>{item.body}
            <p></p>{item.demo && (
              <a href={item.demo} target="_blank" rel="noreferrer" className="button-link">DEMO</a>
            )}
            {item.code && (
              <a href={item.code} target="_blank" rel="noreferrer" className="button-link">CODE</a>
            )}</p>
          </li>
      ))}
      </ul>
    </section>

  );
}



