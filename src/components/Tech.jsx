import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc/SectionWrapper'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
{technologies.map((technology)=>(
  <div className='w-28 h-28' key={technology.name}>
    <BallCanvas icon={technology.icon}/>
    <p className='text-white items-center align-center text-center text-secondary text-[17px]'>{technology.name}</p>
    </div>
))}
    </div>
  )
}

export default SectionWrapper(Tech, '') 