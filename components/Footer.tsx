import { Facebook, Github, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black
        text-gray-600 dark:text-gray-400
        border-t border-gray-200 dark:border-gray-800
        shadow-inner
      "
    >
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sol Vathanak, All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/vathanaksol"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center w-10 h-10 rounded-full
                border border-gray-300 dark:border-gray-700
                hover:border-violet-500 dark:hover:border-violet-400
                transition-all duration-200 transform hover:scale-110
                shadow-[0_0_8px_rgba(139,92,246,0.8)]
              "
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400" />
            </a>
            <a
              href="https://web.facebook.com/vathanak.sol/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center w-10 h-10 rounded-full
                border border-gray-300 dark:border-gray-700
                hover:border-blue-500 dark:hover:border-blue-400
                transition-all duration-200 transform hover:scale-110
                shadow-[0_0_8px_rgba(59,130,246,0.8)]
              "
            >
              <Facebook className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400" />
            </a>
            <a
              href="https://www.youtube.com/@nakkhmertechnology"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center w-10 h-10 rounded-full
                border border-gray-300 dark:border-gray-700
                hover:border-red-500 dark:hover:border-red-400
                transition-all duration-200 transform hover:scale-110
                shadow-[0_0_8px_rgba(248,113,113,0.8)]
              "
            >
              <Youtube className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400" />
            </a>
            <a
              href="https://t.me/Vathanak23"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center w-10 h-10 rounded-full
                border border-gray-300 dark:border-gray-700
                hover:border-blue-400 dark:hover:border-blue-300
                transition-all duration-200 transform hover:scale-110
                shadow-[0_0_8px_rgba(96,165,250,0.8)]
              "
            >
              <MessageCircle className="w-5 h-5 text-gray-600 dark:text-gray-400 hover:text-blue-400 dark:hover:text-blue-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
