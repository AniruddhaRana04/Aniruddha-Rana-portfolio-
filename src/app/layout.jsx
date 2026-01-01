import '../styles/globals.css'
import Link from 'next/link'
import ThemeToggle from '../components/ThemeToggle'
import MobileNav from '../components/MobileNav'
export const metadata = {
  title: 'Aniruddha Rana — Portfolio',
  description: 'Portfolio of Aniruddha Rana',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100 transition-colors">
        <div id="top" className="container py-12">
          <nav className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <img src="/avatar.jpg" alt="Aniruddha Rana" className="w-10 h-10 rounded-full shadow-md" />
              <Link href="/" className="text-xl font-semibold">Aniruddha Rana</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4 text-sm">
              <Link href="#projects" className="nav-link">Projects</Link>
              <Link href="/about" className="nav-link">About</Link>
              <Link href="/certificates" className="nav-link">Certificates</Link>
              {/* <Link href="/blog" className="nav-link">Blog</Link> */}
              <Link href="/contact" className="nav-link">Contact</Link>
              <ThemeToggle />
            </div>

            {/* Mobile nav */}
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <MobileNav />
            </div>
          </nav>

          {children}

          <footer className="mt-16 border-t border-slate-200 dark:border-slate-700 pt-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <Link href="/" className="flex items-center gap-3">
                  <img src="/avatar.jpg" alt="Aniruddha Rana" className="w-9 h-9 rounded-full shadow-sm" />
                  <span className="font-semibold">Aniruddha Rana</span>
                </Link>
                <p className="text-xs text-slate-500 mt-1 max-w-xs">Software engineer building web apps &mdash; available for freelance and full-time roles.</p>
              </div>

              <div className="flex gap-8">
                <div>
                  <h4 className="font-medium mb-2">Navigate</h4>
                  <ul className="space-y-1">
                    <li><Link href="/projects" className="hover:text-sky-600">Projects</Link></li>
                    <li><Link href="/about" className="hover:text-sky-600">About</Link></li>
                    {/* <li><Link href="/blog" className="hover:text-sky-600">Blog</Link></li> */}
                    <li><Link href="/contact" className="hover:text-sky-600">Contact</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Contact</h4>
                  <ul className="space-y-1">
                    <li><a href="mailto:baburanaani@gmail.com" className="hover:text-sky-600">baburanaani@gmail.com</a></li>
                    <li><a href="https://wa.me/9242898355" target="_blank" rel="noreferrer" className="hover:text-sky-600">WhatsApp</a></li>
                    <li><a href="https://www.linkedin.com/in/aniruddha-rana-86b097284/" target="_blank" rel="noreferrer" className="hover:text-sky-600">LinkedIn</a></li>
                    <li><a href="https://github.com/AniruddhaRana04" target="_blank" rel="noreferrer" className="hover:text-sky-600">GitHub</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
              <span>© {new Date().getFullYear()} Aniruddha Rana. All rights reserved.</span>
              <div className="mt-3 md:mt-0 flex items-center gap-4">
                <a href="#top" className="hover:text-sky-600">Back to top ↑</a>
                <span>Built with love ❤️</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
