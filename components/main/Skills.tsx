'use client'

import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'
import SkillText from '../sub/SkillText'
import { Backend_skill, Frontend_skill, Other_skill, Common_skill } from '@/constants'

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-[20]"
      style={{ transform: 'scale(0.9)' }}
    >
      <SkillText />

      <div className="flex flex-row flex-wrap mb-7 gap-5 items-center justify-center">
        {Common_skill.map((image, index) => (
          <div key={index}>
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <div className="text-center mt-3 text-white text-[10px]">{image.skill_name}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap mb-7 gap-5 items-center justify-center">
        {Frontend_skill.map((image, index) => (
          <div key={index}>
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <div className="text-center mt-3 text-white text-[10px]">{image.skill_name}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap mb-7 gap-5 items-center justify-center">
        {Backend_skill.map((image, index) => (
          <div key={index}>
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <div className="text-center mt-3 text-white text-[10px]">{image.skill_name}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap mb-7 gap-5 items-center justify-center">
        {Other_skill.map((image, index) => (
          <div key={index}>
            <SkillDataProvider
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
            <div className="text-center mt-3 text-white text-[10px]">{image.skill_name}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
