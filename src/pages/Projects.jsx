import React from 'react'

export const Projects = ({ data }) => {
  return (
    <section>
      <ul>
        {data.projects.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            {item.demo && (
              <a href={item.demo} target="_blank" rel="noreferrer" className="button-link">Demo</a>
            )}
            {item.code && (
              <a href={item.code} target="_blank" rel="noreferrer" className="button-link">Code</a>
            )}
          </li>
      ))}
      </ul>
    </section>
  
  )
}



