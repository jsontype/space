"use client"

import Image from "next/image"
import React from "react"

interface Props {
  src: string
  title: string
  name: string
  description: string
}

const ProjectCard = ({ src, title, name, description }: Props) => {
  // ***! 1. sub/MoviesModal.tsx, sub/TodosModal.tsx, sub/ShoppingModal.tsx を作成する。
  // ***! 2. 上の画面をこのページにてimportして、name switch文を使って、onClick関数でモーダルを開く
  // ***! 3.　中を作る：ShoppingModalだけ。Countだけでいい。
  const onClick = () => alert(`Open ${name}`)

  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border-0 hover:border-2 hover:border-[#2A0E61] z-[20] cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
