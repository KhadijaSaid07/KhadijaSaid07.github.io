import { useEffect, useState } from 'react'
import {
  Code2,
  Home,
  Mail,
  Menu,
  Route,
  UserRound,
  Wrench,
  X,
} from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About Me', href: '#about', icon: UserRound },
  { label: 'Services', href: '#services', icon: Wrench },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Journey', href: '#journey', icon: Route },
  { label: 'Contact', href: '#contact', icon: Mail },
]

const mobileNavigation = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Journey', href: '#journey', icon: Route },
  { label: 'Contact', href: '#contact', icon: Mail },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#C9BFB0] bg-[#172321] shadow-[0_4px_24px_rgba(23,35,33,0.16)]">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-[#E3C88C] transition hover:border-[#E3C88C] hover:bg-white/10 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <a
              href="#home"
              onClick={closeMenu}
              className="group flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#FFFDF8] p-1.5">
                <img
                  src="/images/logo.png"
                  alt="Khalsa360 logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="text-sm font-extrabold tracking-tight text-white sm:text-base">
                  Khadija Ali Said
                </p>

                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#E3C88C] sm:text-[10px]">
                  KHALSA360
                </p>
              </div>
            </a>
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                  <Icon
                    size={15}
                    className="text-[#E3C88C]/70 transition-colors group-hover:text-[#E3C88C]"
                  />

                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-[#C45A3C]/50 bg-[#C45A3C]/10 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#C45A3C]" />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="absolute inset-0 bg-[#172321]/70 backdrop-blur-[2px]"
          />

          <aside
            aria-label="Mobile navigation"
            className="absolute left-0 top-0 flex h-full w-[290px] max-w-[86vw] flex-col border-r border-[#3C4D49] bg-[#172321] shadow-2xl"
          >
            <div className="flex h-[72px] items-center justify-between border-b border-white/10 px-4">
              <a
                href="#home"
                onClick={closeMenu}
                className="flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#FFFDF8] p-1.5">
                  <img
                    src="/images/logo.png"
                    alt="Khalsa360 logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-white">
                    Khadija Ali Said
                  </p>

                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-[#E3C88C]">
                    KHALSA360
                  </p>
                </div>
              </a>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/70 transition hover:border-[#E3C88C] hover:bg-white/10 hover:text-[#E3C88C]"
              >
                <X size={19} />
              </button>
            </div>

            <div className="border-b border-white/10 px-4 py-4">
              <div className="rounded-xl border border-[#E3C88C]/20 bg-[#0F4C4A] px-3 py-3">
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/50">
                  Professional Identity
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Web & Mobile Developer
                </p>

                <p className="text-xs text-[#E3C88C]">
                  Technical Documentation
                </p>
              </div>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {navigation.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#E3C88C]">
                      <Icon size={17} />
                    </span>

                    {item.label}
                  </a>
                )
              })}
            </nav>

            <div className="border-t border-white/10 bg-[#0F4C4A] p-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">
                Learn. Build. Solve. Grow.
              </p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Building practical digital solutions through continuous
                learning and real projects.
              </p>
            </div>
          </aside>
        </div>
      )}

      <nav
        aria-label="Mobile quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C9BFB0] bg-[#172321] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(23,35,33,0.18)] lg:hidden"
      >
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-1">
          {mobileNavigation.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.href}
                href={item.href}
                className="flex h-14 w-16 flex-col items-center justify-center gap-1 rounded-xl text-white/60 transition hover:text-[#E3C88C]"
              >
                <Icon size={19} />

                <span className="font-mono text-[10px] font-medium">
                  {item.label}
                </span>
              </a>
            )
          })}
        </div>
      </nav>
    </>
  )
}

export default Navbar

