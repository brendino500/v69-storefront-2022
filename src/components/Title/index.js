import { twMerge } from 'tailwind-merge'

function Title({ children, element: Component, className }) {
  const sharedClassName = twMerge('font-title text-7xl', className)
  return (
    <div className="flex items-center justify-center">
      <Component className={sharedClassName}>{children}</Component>
    </div>
  )
}

export default Title
