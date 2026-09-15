import { motion } from 'framer-motion'
import {
  ArrowDown,
  Code2,
  FileText,
  MapPin,
  Smartphone,
} from 'lucide-react'

function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FBF9F4] pt-28"
    >
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[7%] top-0 h-full w-px bg-[#0F4C4A]/[0.07]" />
        <div className="absolute left-[14%] top-0 hidden h-full w-px bg-[#C45A3C]/[0.045] lg:block" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#0F4C4A]/[0.055]" />
        <div className="absolute right-[15%] top-0 hidden h-full w-px bg-[#B58A4A]/[0.045] lg:block" />

        <div className="absolute left-0 top-[18%] h-px w-full bg-[#0F4C4A]/[0.055]" />
        <div className="absolute left-0 top-[62%] h-px w-full bg-[#C45A3C]/[0.045]" />
        <div className="absolute left-0 top-[86%] h-px w-full bg-[#0F4C4A]/[0.05]" />

        <div className="absolute left-[7%] top-[18%] h-2 w-2 rounded-full border border-[#C45A3C]/50 bg-[#FBF9F4]" />
        <div className="absolute right-[8%] top-[62%] h-2 w-2 rounded-full border border-[#B58A4A]/60 bg-[#FBF9F4]" />

        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#0F4C4A]/[0.025] blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-[#C45A3C]/[0.025] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-20 lg:px-8 lg:pb-24">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E0D9CE] bg-white px-3.5 py-2 shadow-sm">
            <MapPin
              size={14}
              strokeWidth={1.8}
              className="text-[#C45A3C]"
            />

            <span className="font-mono text-[11px] font-medium text-[#68716D]">
              Zanzibar, Tanzania
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="h-px w-8 bg-[#D6CEC0]" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A0978B]">
              KHALSA360
            </span>
          </div>
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Hero copy */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1EE] text-[#0F4C4A]">
                <Code2 size={17} strokeWidth={1.8} />
              </div>

              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F4C4A]">
                Web · Mobile · Documentation
              </p>
            </div>

            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-[#C45A3C]">
              BUILD WITH PURPOSE
            </p>

            <h1 className="max-w-3xl text-balance text-4xl font-extrabold leading-[1.02] tracking-[-0.045em] text-[#172321] sm:text-5xl md:text-6xl lg:text-[4.7rem]">
              Hello, I&apos;m
              <span className="block text-[#0F4C4A]">
                Khadija Ali Said.
              </span>
            </h1>

            <h2 className="mt-5 max-w-xl text-xl font-semibold leading-8 tracking-[-0.02em] text-[#34413D] sm:text-2xl">
              Turning ideas into{' '}
              <span className="text-[#C45A3C]">
                practical digital solutions.
              </span>
            </h2>

            <div className="mt-7 max-w-xl border-l-2 border-[#B58A4A] pl-5">
              <p className="text-base leading-7 text-[#626B67] sm:text-lg">
                I learn by building, solve problems through technology, and
                continuously improve through real projects and practical
                experience.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-[#0F4C4A] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,76,74,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A3D3B]"
              >
                Explore My Work

                <ArrowDown
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </a>
            </div>

            <div className="mt-10">
              <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#9A9185]">
                HOW I APPROACH DEVELOPMENT
              </p>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-xs font-bold">
                <span className="text-[#0F4C4A]">LEARN</span>

                <span className="text-[#B58A4A]">→</span>

                <span className="text-[#0F4C4A]">BUILD</span>

                <span className="text-[#B58A4A]">→</span>

                <span className="text-[#0F4C4A]">SOLVE</span>

                <span className="text-[#B58A4A]">→</span>

                <span className="text-[#C45A3C]">GROW</span>
              </div>
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: 'easeOut',
            }}
            className="relative mx-auto w-full max-w-2xl"
          >
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full border border-[#B58A4A]/30 sm:-right-6 sm:-top-6 sm:h-32 sm:w-32" />

            <div className="absolute -bottom-4 -left-4 h-20 w-20 rounded-full border border-[#0F4C4A]/15 sm:-bottom-7 sm:-left-7 sm:h-28 sm:w-28" />

            <div className="relative rounded-[2rem] border border-[#DDD6CA] bg-white p-3 shadow-[0_24px_70px_rgba(23,35,33,0.09)] sm:p-4">
              <div className="mb-3 flex items-center justify-between px-2 sm:mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#C45A3C]" />
                  <span className="h-2 w-2 rounded-full bg-[#B58A4A]" />
                  <span className="h-2 w-2 rounded-full bg-[#7D9A91]" />
                </div>

                <span className="font-mono text-[8px] font-medium uppercase tracking-[0.16em] text-[#A0978B] sm:text-[9px]">
                  khalsa360 / build
                </span>
              </div>

              <div className="relative overflow-hidden rounded-[1.5rem] bg-[#F1F5F2]">
                <img
                  src="/images/profile.png"
                  alt="Khadija Ali Said portfolio visual"
                  className="block h-auto max-h-[620px] min-h-[300px] w-full object-contain"
                />

                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5">
                  <div className="inline-flex max-w-full items-center gap-3 rounded-2xl border border-white/70 bg-[#FFFDF8]/95 px-4 py-3 shadow-lg backdrop-blur-md">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F4C4A] text-white">
                      <Code2 size={15} />
                    </span>

                    <div>
                      <p className="font-mono text-[8px] font-bold uppercase tracking-[0.18em] text-[#C45A3C]">
                        KEEP BUILDING
                      </p>

                      <p className="mt-0.5 text-xs font-semibold text-[#172321] sm:text-sm">
                        Every project is a step forward.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4">
                <div className="flex items-center gap-2 rounded-xl bg-[#FBF9F4] px-3 py-3">
                  <Code2
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#0F4C4A]"
                  />

                  <span className="text-[10px] font-semibold text-[#46524E] sm:text-xs">
                    Web
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-[#FBF9F4] px-3 py-3">
                  <Smartphone
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#C45A3C]"
                  />

                  <span className="text-[10px] font-semibold text-[#46524E] sm:text-xs">
                    Mobile
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-xl bg-[#FBF9F4] px-3 py-3">
                  <FileText
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#B58A4A]"
                  />

                  <span className="text-[10px] font-semibold text-[#46524E] sm:text-xs">
                    Documentation
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-3 right-5 hidden rounded-full border border-[#DDD6CA] bg-[#FFFDF8] px-3 py-2 shadow-md sm:block">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0F4C4A]">
                Learn · Build · Grow
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

