import {
  BriefcaseBusiness,
  Code2,
  Home,
  Mail,
  UserRound,
} from 'lucide-react'

const navigation = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Work', href: '#work', icon: BriefcaseBusiness },
  { label: 'Contact', href: '#contact', icon: Mail },
]

function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-[#C9BFB0] bg-[#172321] shadow-[0_4px_24px_rgba(23,35,33,0.16)]">
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between gap-4 px-3 sm:px-6 lg:px-8">
          <a
            href="#home"
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

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-0.5 lg:flex"
          >
            {navigation.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white"
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

      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[#C9BFB0] bg-[#172321] pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(23,35,33,0.18)] lg:hidden"
      >
        <div className="mx-auto flex h-16 max-w-md items-center justify-around px-1">
          {navigation.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.href}
                href={item.href}
                className="flex h-14 min-w-14 flex-1 flex-col items-center justify-center gap-1 rounded-xl text-white/60 transition hover:text-[#E3C88C]"
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

