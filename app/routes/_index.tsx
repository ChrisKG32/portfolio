import type { MetaFunction } from '@remix-run/node'
import LanderSection from '~/components/layouts/LanderSection'
import { experiences } from '~/fixtures/experiences.fixtures'
import ExperienceBlock from '~/components/landing/ExperienceBlock'
import LogoClouds from '~/components/landing/LogoClouds'
import { useLottie } from 'lottie-react'
import animationData from 'public/tumbleweed2.json'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  const { View } = useLottie({
    animationData,
    width: 200,
    height: 200,
  })
  return (
    <div>
      <LanderSection variant="secondary">
        <div className="block space-y-8 mx-auto">
          <div>
            <h3 className="text-center text-primary font-semibold uppercase">
              History
            </h3>
            <h2 className="dark:text-white text-4xl font-bold text-center">
              Some of my experience
            </h2>
          </div>
          <div className="">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-h-96 xl:gap-y-0 xl:min-h-48 border-t border-l dark:border-trueGray-600">
              {[...experiences].reverse().map((exp) => {
                return (
                  <ExperienceBlock
                    key={exp.id}
                    {...exp}
                    active={!exp.dateEnded}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </LanderSection>
      <LanderSection variant="primary">
        <LogoClouds />
      </LanderSection>
      <LanderSection variant="secondary">
        <div className="block space-y-8 mx-auto pb-8">
          <div>
            <h3 className="text-center text-primary font-semibold uppercase">
              Showcase
            </h3>
            <h2 className="dark:text-white text-4xl font-bold text-center">
              Some of my personal projects
            </h2>
            <p className="dark:text-zinc-400 text-center max-w-md mx-auto mt-1">
              Most of my projects have been private for
              clients.
              <br />I will be adding to this section soon...
            </p>
          </div>
          <div className="p-16 w-full min-h-48">
            <div className="max-w-24">{View}</div>
          </div>
          {/*<div className="max-w-6xl mx-auto gap-12 md:gap-16 grid grid-cols-1 md:grid-cols-2 min-h-96 xl:min-h-48">*/}
          {/*{projects.map((project) => {*/}
          {/*  return (*/}
          {/*    <ProjectCard*/}
          {/*      key={project.id}*/}
          {/*      {...project}*/}
          {/*    />*/}
          {/*  )*/}
          {/*})}*/}
          {/*</div>*/}
        </div>
      </LanderSection>
    </div>
  )
}
