import LanderSection from '~/components/layouts/LanderSection'

export default function Hero() {
  return (
    <LanderSection variant="primary">
      <div className="flex flex-col lg:flex-row lg:justify-around w-full">
        <div className="lg:flex lg:flex-[3] flex-[1]">
          <h1 className="text-center lg:text-right text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black dark:text-white">
            Christopher
            <br />
            Gregory
          </h1>
        </div>
        <div className="flex flex-col flex-[2] items-center space-y-48 md:space-y-0 pt-8">
          <div className="hidden md:block dark:bg-trueGray-700 h-24 w-24" />
          <h3 className="dark:text-white text-3xl font-bold pt-8 px-4 md:px-0">
            I grow businesses with engineering, data-driven
            decisions, automation, and team building.
          </h3>
        </div>
      </div>
    </LanderSection>
  )
}
