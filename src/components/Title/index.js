import { twMerge } from 'tailwind-merge'

function Title({ children, element: Component, className }) {
  const sharedClassName = twMerge(
    'font-title text-5xl md:text-7xl text-center',
    className
  )
  return (
    <div className="flex items-center justify-center">
      <Component className={sharedClassName}>{children}</Component>
    </div>
  )
}

export default Title
