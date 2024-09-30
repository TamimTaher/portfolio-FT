'use client'

import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image"
import { IoLogoJavascript } from "react-icons/io5"
import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { RiNextjsFill } from "react-icons/ri"
import { RiTailwindCssFill } from "react-icons/ri"
import { FaWordpress } from "react-icons/fa"
import { FaBrave } from "react-icons/fa6"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { CardHeader } from "@/components/CardHeader"
import { ToolboxItems } from "@/components/ToolboxItems"
import { motion } from "framer-motion"
import { useRef } from "react"

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: IoLogoJavascript,
  },
  {
    title: 'HTML5',
    iconType: FaHtml5,
  },
  {
    title: 'CSS3',
    iconType: FaCss3Alt,
  },
  {
    title: 'NextJS',
    iconType: RiNextjsFill,
  },
  {
    title: 'React',
    iconType: FaReact,
  },
  {
    title: 'Tailwind',
    iconType: RiTailwindCssFill,
  },
  {
    title: 'WordPress',
    iconType: FaWordpress,
  },
  {
    title: 'Brave',
    iconType: FaBrave,
  },
  {
    title: 'Github',
    iconType: FaGithub,
  },
]

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Writing',
    emoji: '✍️',
    left: '35%',
    top: '40%',
  },
  {
    title: 'Reading',
    emoji: '📖',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Anime',
    emoji: '📺',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Football',
    emoji: '⚽',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Travel',
    emoji: '🗺️',
    left: '50%',
    top: '70%',
  },
]

export const AboutSection = () => {
  const constrainRef = useRef(null)
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspires me." />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the books shaping my perspectives." />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader 
              title="My Toolbox" 
              description="Explore the technologies and tools I use to craft exceptional digital experiences." 
              className="" />
              <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName=" animate-move-right [animation-duration:20s]" />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbies beyond the digital realm." className="px-6 py-6" />
              <div className="relative flex-1" ref=
              {constrainRef}>
                {hobbies.map(hobby => (
                  <motion.div 
                  key={hobby.title} 
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute" 
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                  drag
                  dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="smiling memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
