import type { FC } from 'react'
import dayjs from 'dayjs'
import cx from 'clsx'
import type { Experience } from '~/fixtures/experiences.fixtures'

type ExperienceProps = Experience & {
  active?: boolean
}

const ExperienceBlock: FC<ExperienceProps> = ({
  dateStarted,
  dateEnded,
  title,
  company,
  description,
  active = false,
}) => {
  return (
    <div
      className={cx(
        'relative px-6 pt-12 pb-16 border-b border-r dark:border-trueGray-600 dark:text-trueGray-400',
        {
          'dark:bg-bgPrimary': active,
        },
      )}
    >
      <div className="mb-5">
        <span className="uppercase text-sm tracking-wide">
          {dayjs(dateStarted).format('MMM YYYY')} -{' '}
          {dateEnded
            ? dayjs(dateEnded).format('MMM YYYY')
            : 'Present'}
        </span>
        <h3
          className={cx(
            'text-lg dark:text-trueGray-100 font-semibold mt-1',
            active ? 'tracking-wider' : 'tracking-wide',
          )}
        >
          {title}
        </h3>
        <h4 className="tracking-wider mt-3 text-sm dark:text-trueGray-400">
          {company}
        </h4>
      </div>
      <p className="leading-relaxed text-sm">
        {description}
      </p>
    </div>
  )
}

export default ExperienceBlock
