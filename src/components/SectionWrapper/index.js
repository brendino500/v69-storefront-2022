import { twMerge } from 'tailwind-merge'

function SectionWrapper({ children, className, id }) {
  const mergedClassName = twMerge(
    'overflow-hidden relative w-full text-black bg-gray',
    className
  )

  return (
    <section id={id} className={mergedClassName}>
      {children}
    </section>
  )
}

export default SectionWrapper
