import React from 'react'

const About = () => {
  return (
    <div>
      <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 py-14'>

        <h1 className='font-bold text-3xl'>About</h1>
        <p className='text-justify'>Hello, I'm Muhammad Nouman Arshad, a passionate Frontend Developer with skills in HTML, CSS, JavaScript, React, Figma, and GitHub. As a fresher with a strong portfolio, I am eager to bring innovative ideas to the frontend development world. I'm currently seeking a frontend developer role to apply my skills and grow professionally.</p>
        <br />

        <h1 className='font-bold text-2xl'>Education & Training</h1>
        <div className='text-justify mt-1.5'>
          <p className='font-bold md:px-11 text-lg'>•	Bachelors in Computer Science - 2025</p>
          <p className='md:px-22'>University of the Punjab, Lahore, Pakistan</p>
          <p className='font-bold md:px-11 text-lg'>•	Intermediate/HSSC	- 2021</p>
          <p className='md:px-22'>Punjab Group of College, Lahore</p>
          <p className='font-bold md:px-11 text-lg'>•	Matriculation/SSC	- 2019</p>
          <p className='md:px-22'>Sadiq Memorial High School, Khudian Khas</p>          	
        </div>
        <br />

        {/* <h1 className='font-bold text-2xl'>Professional Experience</h1>
        <p className='text-justify'>[Freelance/Contract Work], [Client/Organization], [Dates]
          [Brief description of projects and contributions] 
        </p>
        <br /> */}

        <h1 className='font-bold text-2xl'>Projects</h1>
        <div className='text-justify mt-1.5'>
        <p className='md:px-11'>• Library Management in C ++</p>
        <p className='md:px-11'>• To Do List App in React JS</p>
        <p className='md:px-11'>• E-Commerce Website in React JS</p>
        </div>
        <br />

        <h1 className='font-bold text-2xl'>Mission Statement</h1>
        <p className='text-justify'>My mission is to leverage my frontend development skills and creativity to deliver user-friendly and visually appealing web solutions. I am committed to continuous learning and excited to take on new challenges while contributing to dynamic projects in the tech landscape.
        </p>

      </div>
    </div>
  )
}

export default About
