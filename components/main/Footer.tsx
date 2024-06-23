import React from 'react'
import { RxTwitterLogo, RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <FaYoutube />
              <a className="text-[15px] ml-[6px]" href="https://www.youtube.com/c/CodingCafe1">
                Youtube
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <RxGithubLogo />
              <a className="text-[15px] ml-[6px]" href="https://github.com/jsontype">
                Github
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <RxLinkedinLogo />
              <a
                className="text-[15px] ml-[6px]"
                href="https://www.linkedin.com/in/donghwa-yang-b73a57216/"
              >
                Linkedin
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <RxInstagramLogo />
              <a className="text-[15px] ml-[6px]" href="https://www.instagram.com/jsontype/">
                Instagram
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <RxGithubLogo />
              <a className="text-[15px] ml-[6px]" href="https://www.facebook.com/yangdonghwa">
                Facebook
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <RxTwitterLogo />
              <a className="text-[15px] ml-[6px]" href="https://x.com/jsontype">
                X
              </a>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <a className="text-[15px] ml-[6px]" href="#">
                {' '}
                To the Top
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <a className="text-[15px] ml-[6px]" href="https://jsontype.github.io/home">
                {' '}
                Old Portforlio
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer z-50">
              <a className="text-[15px] ml-[6px]" href="mailTo:jsontyper@gmail.com">
                {' '}
                jsontyper@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Dev Jsontyper {new Date().getFullYear()} Inc. All rights reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
