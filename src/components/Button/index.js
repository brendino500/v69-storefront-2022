import { twMerge } from 'tailwind-merge'

function Button({ href, onClick, children, className }) {
  const sharedClassName = twMerge(
    'bg-galliano text-black rounded-md h-10 w-80 tracking-widest drop-shadow-default text-body uppercase hover:bg-galliano-300',
    className
  )
  return href ? (
    <a href={href} className={sharedClassName}>
      <span>{children}</span>
    </a>
  ) : (
    <button type="button" onClick={onClick} className={sharedClassName}>
      {children}
    </button>
  )
}

export default Button
