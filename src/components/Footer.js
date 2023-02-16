import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export const Footer = () => {
  return (
    <footer classNameName="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
      <div className="sm:flex sm:items-center sm:justify-between  dark:bg-gray-800">
        <Link to="/" className="flex items-center mb-4 sm:mb-0">
          <img src={Logo} className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            MovieCheck
          </span>
        </Link>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6 "
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"
              target="_blank"
              rel="noreferrer"
              className="mr-4 hover:underline md:mr-6 "
            >
              Tiktok
            </a>
          </li>
        </ul>
      </div>

      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400  dark:bg-gray-800">
        © 2023{' '}
        <Link to="/" className="hover:underline">
          MovieCheck
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  )
}
