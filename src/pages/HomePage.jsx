import React from 'react'

export const HomePage = ({ data }) => {
    
  return (
    <section>
      <p>{data.bio[0].bio}</p>
    </section>
  )
}
