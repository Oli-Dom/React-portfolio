import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {DiGithubAlt} from 'react-icons/di'

const headerSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/in/oliver-dominguez-a30240246/' target="_blank"><BsLinkedin/></a>
      <a href='https://github.com/Oli-Dom' target="_blank"><DiGithubAlt/></a>
    </div>
  )
}

export default headerSocials
