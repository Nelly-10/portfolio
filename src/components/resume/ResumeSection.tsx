import React from 'react'
import Header from '../general/Header'
import ResumeCard from './ResumeCard'
import { LuAward, LuBookOpen, LuGraduationCap, LuPackage, LuServer } from 'react-icons/lu'
import { RiNextjsFill } from 'react-icons/ri'

export default function ResumeSection() {
  return (
    <section id='resume' className='my-12'>
      <div className='w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10'>
        {/* education section */}
        <div data-aos="zoom-out">
          <Header title="My Education" as='h2' />
          <div className='space-y-6'>
            <ResumeCard
              icon={LuGraduationCap}
              role='Electrical Engineering'
              description='Higher National Diploma | Federal Polytechnic Ilaro | Focused on software engineering principles, data structures and web technologies'
              date='jan 2019 - April 2025' />

            <ResumeCard
              icon={LuBookOpen}
              role='Relevant Coursework'
              description='Web development, Database Systems, Data Structures & Algorithms Software Engineering'
            />

            <ResumeCard
              icon={LuAward}
              role="Academic Achievements"
              description="Best coder "
              date='March 2022 - Dec 2023'
            />
          </div>
        </div>


        {/* work experience */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title='My Work Experience' as='h2' />
          <div className='space-y-6'>
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer"
              description="Crafting responsive, accessible interfaces with modern frameworks like React & Next.js. Focus on performance, UX, and pixel-perfect implementation."
            />

            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Building scalable APIs, databases, and server infrastructure architecture"
            />

            <ResumeCard
              icon={LuPackage}
              role="Fullstack Developer"
              description="End-to-end web application development. Bridging frontend interface with backend systems for cohesive, full-featured digital solutions."
            />
          </div>
        </div>
      </div>
    </section>
  )
}
