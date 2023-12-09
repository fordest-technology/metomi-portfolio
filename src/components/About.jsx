import React from 'react'
import aboutMePics from '../Images/aboutMePics.png';
const About = () => {
  return (
      <div className='md:flex md:gap-56 justify-center'>
      <div>
        <img className='w-[200px]' src={aboutMePics} />
      </div>
      <div>
        <div>
          <h2 className='text-[30px]'>About Me</h2>
          <br />
          <div>
          <p className='text-ellipsis font-Roboto text-[15px] w-[500px] font-normal'>
            I'm Metomi Oyetunde, a product designer with  a great
            enth  usiasm to creating user-centered experiences.
            My design focuses on understanding users' needs from
            the users perspective and pain point, creating solutions
            with the best with functionality and aesthetics. When
            not designing, I surf the internet and various social
            media platform, engaging my sight and mind to glean
            from various aesthetic experts all over the world.
            Let's collaborate and bring innovative ideas to life.
          </p>
          </div>
          <br />
          <p>Tools</p>
          <div className='md:flex gap-4'>
            <p className='text-[10px] rounded-full border stroke-white p-1 '>Figma</p>
            <p className='text-[10px] rounded-full border stroke-white p-1 '>Adobe Illustrator</p>
            <p className='text-[10px] rounded-full border stroke-white p-1 '>Adobe photoshop</p>
            <p className='text-[10px] rounded-full border stroke-white p-1 '>CorelDraw</p>
            <p className='text-[10px] rounded-full border stroke-white p-1 '>Vs Code</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About