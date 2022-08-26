import { twMerge } from 'tailwind-merge'

function SectionWrapper({ children, className, id }) {
  const mergedClassName = twMerge(
    'overflow-hidden relative w-full text-black bg-gray h-full',
    className
  )

  return (
    <section id={id} className={mergedClassName}>
      {children}
    </section>
  )
}

export default SectionWrapper
