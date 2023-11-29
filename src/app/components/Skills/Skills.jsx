import React from 'react'


// components
import Frontend from './Frontend'
import Backend from './Backend'

// style
import './skills.css'

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section__title'>Skills</h2>
        <span className='section__subtitle'>Nível tecnico</span>

        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skills