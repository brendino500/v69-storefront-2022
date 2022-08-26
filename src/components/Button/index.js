import { twMerge } from 'tailwind-merge'

function Button({ href, onClick, children, className, secondary }) {
  const buttonStyle = secondary ? 'btn-secondary' : 'btn-primary'
  const sharedClassName = twMerge(
    'text-body text-center h-10 w-80 uppercase tracking-widest rounded-md hover:rounded-none drop-shadow-default',
    buttonStyle,
    className
  )
  return href ? (
    <a
      href={href}
      className={sharedClassName}
      secondary={secondary}
      crossOrigin
    >
      <span>{children}</span>
    </a>
  ) : (
    <button
      type="button"
      onClick={onClick}
      className={sharedClassName}
      secondary={secondary}
    >
      <span>{children}</span>
    </button>
  )
}

export default Button
