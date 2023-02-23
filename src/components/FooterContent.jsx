import React from 'react'
import {BsLinkedin, BsEnvelope, BsGithub} from 'react-icons/bs'


export const FooterContent = () => {
  return (
    <footer>
        <a href="https://www.linkedin.com/in/enricoopezzo/" target={`_blank`}><BsLinkedin /></a>
        <a href="mailto:enrico.opezzo@gmail.com" target={`_blank`}><BsEnvelope /></a>
        <a href="https://github.com/enricoopezzo" target={`_blank`}><BsGithub /></a>
    </footer>
  )
}
