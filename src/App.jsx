import { Suspense } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'
import News from './pages/News'
import Podcasts from './pages/Podcasts'
import About from './pages/About'
import Contact from './pages/Contact'
import Sidebar from './components/Sidebar'

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({isActive}) =>
      `px-2 py-1 rounded ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'}`
    }
  >{children}</NavLink>
)

export default function App(){
  const { t, i18n } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-red-600/60">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/5 bg-neutral-950/75">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 rounded-lg bg-red-600 items-center justify-center font-black">NH</span>
            <span className="font-bold tracking-wide">Nosu Horror Hub</span>
          </NavLink>
          <nav className="hidden md:flex items-center gap-4 text-sm">
            <NavItem to="/">{t('nav.home')}</NavItem>
            <NavItem to="/news">{t('nav.news')}</NavItem>
            <NavItem to="/podcasts">{t('nav.podcasts')}</NavItem>
            <NavItem to="/about">{t('nav.about')}</NavItem>
            <NavItem to="/contact">{t('nav.contact')}</NavItem>
          </nav>
          <select
            aria-label="Language"
            onChange={(e)=>i18n.changeLanguage(e.target.value)}
            value={i18n.resolvedLanguage}
            className="bg-white/10 text-sm rounded px-2 py-1"
          >
            <option value="en">English</option>
            <option value="th">ไทย</option>
            <option value="jp">日本語</option>
          </select>
        </div>
      </header>

      <Sidebar />

      <main>
        <Suspense fallback={<div className="p-6">Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <footer className="border-t border-white/10 mt-14">
        <div className="max-w-6xl mx-auto px-4 py-10 text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p>© {new Date().getFullYear()} Nosu Horror Hub.</p>
            <div className="flex gap-6">
              <NavLink to="/about" className="hover:text-white">{t('nav.about')}</NavLink>
              <NavLink to="/contact" className="hover:text-white">{t('nav.contact')}</NavLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
