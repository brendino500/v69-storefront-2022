import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'

import data from '@/data/footer.json'

function Footer() {
  const { follow, socialLink, externalLinks, copyright } = data
  return (
    <>
      <hr />
      <footer className="h-[250px] flex items-center justify-center flex-col font-body">
        <p>{follow}</p>
        <a href={socialLink} className="my-4">
          <FaInstagram className="h-[40px] w-[40px]" />
        </a>
        <div className="flex flex-row my-4">
          {externalLinks.map((link) => (
            <ol key={link.link} className="mx-8">
              <a href={link.link}>{link.item}</a>
            </ol>
          ))}
        </div>
        <p>{copyright}</p>
      </footer>
    </>
  )
}

export default Footer
