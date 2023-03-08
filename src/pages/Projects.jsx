import React from 'react'
import { BsCalculator, BsCloudDrizzle, BsListCheck } from 'react-icons/bs'

export const Projects = () => {
  return (
    <div>
      <h3>Projects</h3>
      <ul>
        <li><a href="https://www.enricoopezzo.com/calcolatrice/"><BsCalculator /> Calculator</a></li>
        <li><a href="https://www.enricoopezzo.com/weather/"><BsCloudDrizzle /> Weather app</a></li>
        <li><a href="https://www.enricoopezzo.com/calcolatrice/"><BsListCheck /> Todo list</a></li>
      </ul>
    </div>
  )
}
