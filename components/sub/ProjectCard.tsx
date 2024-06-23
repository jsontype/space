'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import MoviesModal from './MoviesModal'
import TodosModal from './TodosModal'
import ShoppingModal from './ShoppingModal'

interface Props {
  src: string
  title: string
  name: string
  description: string
}

const ProjectCard = ({ src, title, name, description }: Props) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)

  const onClick = () => setOpen(true)

  const renderModal = () => {
    switch (name) {
      case 'movies':
        return <MoviesModal open={open} handleClose={handleClose} />
      case 'todos':
        return <TodosModal open={open} handleClose={handleClose} />
      case 'shopping':
        return <ShoppingModal open={open} handleClose={handleClose} />
      default:
        return null
    }
  }

  return (
    <>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg border-0 hover:border-2 hover:border-[#2A0E61] z-[20] cursor-pointer"
        onClick={onClick}
      >
        <Image src={src} alt={title} width={1000} height={1000} className="w-full object-contain" />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
      {renderModal()}
    </>
  )
}

export default ProjectCard
