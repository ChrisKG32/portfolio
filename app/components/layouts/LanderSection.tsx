import clsx from 'clsx'

export type LanderSectionProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
  className?: string
  children: React.ReactNode
}

export default function LanderSection(
  props: LanderSectionProps,
) {
  const { variant = 'primary' } = props

  return (
    // flex flex-col md:flex-row max-w-7xl mx-auto py-16 px-3
    <div
      className={clsx(
        'py-16 px-4',
        {
          'bg-bgPrimary': variant === 'primary',
          'bg-bgPrimaryLight': variant === 'secondary',
          'bg-bgPrimaryDark': variant === 'tertiary',
        },
        props.className,
      )}
    >
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        {props.children}
      </div>
    </div>
  )
}
