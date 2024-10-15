import { Facebook, Github, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-black">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Sol Vathanak, All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/vathanaksol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Github size={20} />
            </a>
            <a
              href="https://web.facebook.com/vathanak.sol/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.youtube.com/@nakkhmertechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
