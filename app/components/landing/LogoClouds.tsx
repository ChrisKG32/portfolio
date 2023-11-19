import {
  SiApollographql,
  SiDocker,
  SiGraphql,
  SiNextdotjs,
  SiPostgresql,
  SiTypescript,
  SiKubernetes,
  SiReact,
  SiAmazonaws,
  SiNestjs,
  SiGooglecloud,
  SiBun,
} from 'react-icons/si/index.js'

const LogoClouds = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-8">
      <div>
        <h3 className="text-center text-primary font-semibold uppercase">
          Skills
        </h3>
        <h2 className="dark:text-white text-4xl font-bold text-center">
          Some of my favorites
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-0.5 md:grid-cols-3">
        {logos.map(({ Icon, title }) => (
          <div
            key={title}
            className="col-span-1 flex justify-center py-4 sm:py-6  px-4 sm:px-6  dark:bg-neutral-800 items-center space-x-4"
          >
            <Icon className="dark:text-neutral-350 text-2xl sm:text-3xl md:text-4xl" />
            <span className="dark:text-neutral-350 tracking-wide text-2xl sm:text-3xl">
              {title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoClouds

const logos = [
  { title: 'TypeScript', Icon: SiTypescript },
  { title: 'PostgreSQL', Icon: SiPostgresql },
  { title: 'GraphQL', Icon: SiGraphql },
  { title: 'BunJS', Icon: SiBun },
  { title: 'Docker', Icon: SiDocker },
  { title: 'Kubernetes', Icon: SiKubernetes },
  { title: 'React', Icon: SiReact },
  { title: 'NextJS', Icon: SiNextdotjs },
  { title: 'NestJS', Icon: SiNestjs },
  { title: 'AWS', Icon: SiAmazonaws },
  { title: 'Google Cloud', Icon: SiGooglecloud },
  { title: 'Apollo', Icon: SiApollographql },
]
