import { IoMenuSharp } from 'react-icons/io5/index.js'
import type { FC, HTMLAttributes } from 'react'
import cx from 'clsx'

type MenuButtonProps = HTMLAttributes<HTMLButtonElement>

const MenuButton: FC<MenuButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      className={cx(
        'flex items-center justify-center md:hidden',
        className ??
          'w-10 h-10 dark:bg-primary dark:hover:bg-primaryDark',
      )}
      {...props}
    >
      <IoMenuSharp color="white" className="text-2xl" />
    </button>
  )
}

export default MenuButton
