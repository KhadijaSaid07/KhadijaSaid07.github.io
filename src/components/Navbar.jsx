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
import { useState } from 'react'

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
  { label: 'Services', href: '#services', icon: Wrench },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Journey', href: '#journey', icon: Route },
  { label: 'Contact', href: '#contact', icon: Mail },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#C9BFB0] bg-[#172321] shadow-[0_4px_24px_rgba(23,35,33,0.16)]">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-3 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 text-[#E3C88C] transition hover:border-[#E3C88C] hover:bg-white/10 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <a
              href="#home"
              onClick={closeMenu}
              className="flex min-w-0 items-center gap-2 sm:gap-3"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#FFFDF8] p-1.5">
                <img
                  src="/images/logo.png"
                  alt="Khalsa360 logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-extrabold tracking-tight text-white sm:text-base">
                  Khadija Ali Said
                </p>

                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#E3C88C] sm:text-[10px]">
                  KHALSA360
                </p>
              </div>
            </a>
          </div>

          <nav className="hidden shrink-0 items-center gap-0.5 xl:flex">
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 whitespace-nowrap rounded-lg px-2.5 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
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

          <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C45A3C]/50 bg-[#C45A3C]/10 sm:flex">
            <span className="h-2 w-2 rounded-full bg-[#C45A3C]" />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed left-0 right-0 top-[72px] z-50 lg:hidden">
          <div
            className="absolute inset-0 -z-10"
            onClick={closeMenu}
          />

          <aside
            aria-label="Mobile navigation"
            className="w-full border-b border-[#3C4D49] bg-[#172321] shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#E3C88C]">
                  Navigation
                </p>

                <p className="mt-0.5 text-sm font-semibold text-white">
                  Khadija Ali Said
                </p>
              </div>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition hover:border-[#E3C88C] hover:bg-white/10 hover:text-[#E3C88C]"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="grid grid-cols-2 gap-2 px-3 py-3 sm:grid-cols-3">
              {mobileNavigation.map((item) => {
                const Icon = item.icon

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="flex min-h-11 items-center gap-2 rounded-lg border border-white/10 px-3 text-sm font-medium text-white/75 transition hover:border-[#E3C88C]/40 hover:bg-white/10 hover:text-white"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 text-[#E3C88C]"
                    />

                    <span>{item.label}</span>
                  </a>
                )
              })}
            </nav>
          </aside>
        </div>
      )}

      <nav
        aria-label="Mobile quick navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C9BFB0] bg-[#172321] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(23,35,33,0.18)] lg:hidden"
      >
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-1">
          {mobileNavigation.slice(0, 5).map((item) => {
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

