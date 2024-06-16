"use client"

import React from "react"
import ProjectCard from "../sub/ProjectCard"

const Projects = () => {
  const openModal = (project: string) => () => alert(`Open ${project}`)

  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          name="movies"
          src="/NextWebsite.png"
          title="Movies App Demo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          name="todos"
          src="/SpaceWebsite.png"
          title="Todos App Demo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          name="shopping"
          src="/CardImage.png"
          title="Shopping App Demo"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  )
}

export default Projects
