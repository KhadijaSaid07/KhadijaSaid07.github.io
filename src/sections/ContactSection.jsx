import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Link,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khadija09said09@gmail.com',
    href: 'mailto:khadija09said09@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+255 675 788 310',
    href: 'tel:+255675788310',
  },
  {
    icon: Phone,
    label: 'WhatsApp',
    value: '+255 675 788 310',
    href: 'https://wa.me/255675788310',
  },
  {
    icon: Link,
    label: 'GitHub',
    value: 'KhadijaSaid07',
    href: 'https://github.com/KhadijaSaid07',
  },
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'Khadija Ali Said',
    href: 'https://www.linkedin.com/in/khadija-ali-said-353926363',
  },
]

function ContactSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF3E8] px-5 py-20 text-[#252525] sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-20 h-64 w-64 rounded-full bg-[#D96B4A]/[0.06] sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
          <motion.div
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.55,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D96B4A]">
              &apos;Contact
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#252525] sm:text-5xl lg:text-6xl xl:text-7xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#6F6A66] sm:text-lg sm:leading-8">
              Have an idea, project, collaboration, or technical
              documentation need? I&apos;d be happy to hear about it.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-[#6F6A66]">
              <MapPin
                size={18}
                strokeWidth={1.8}
                className="text-[#D96B4A]"
              />
              <span>Zanzibar, Tanzania</span>
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {contactItems.map((item, index) => {
              const Icon = item.icon
              const isLast = index === contactItems.length - 1

              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith('http') ? '_blank' : undefined
                  }
                  rel={
                    item.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  initial={{
                    opacity: 0,
                    y: shouldReduceMotion ? 0 : 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.05,
                  }}
                  className={`group flex min-h-[128px] flex-col justify-between rounded-2xl border border-[#E8D8CC] bg-white p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#D96B4A] hover:shadow-[0_10px_28px_rgba(107,58,58,0.08)] sm:p-6 ${
                    isLast ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E8D8CC] text-[#6B3A3A] transition-colors duration-200 group-hover:border-[#D96B4A] group-hover:bg-[#D96B4A] group-hover:text-white">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                      className="text-[#6F6A66] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D96B4A]"
                    />
                  </div>

                  <div className="mt-6 min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6F6A66]">
                      {item.label}
                    </p>

                    <p className="mt-2 break-words text-sm font-medium leading-6 text-[#252525] transition-colors duration-200 group-hover:text-[#D96B4A] sm:text-base">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.55,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="mt-10 rounded-3xl border border-[#E8D8CC] bg-[#FCE0D0] p-7 sm:p-9 lg:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6B3A3A]">
                Keep Growing
              </p>

              <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-[#252525] sm:text-4xl">
                Learn. Build. Solve. Grow.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#6F6A66] sm:text-base">
                Building practical digital solutions while continuously
                improving through real projects and learning.
              </p>
            </div>

            <a
              href="mailto:khadija09said09@gmail.com"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-[#D96B4A] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#C65D3E] hover:shadow-[0_8px_20px_rgba(217,107,74,0.18)]"
            >
              Send an Email

              <ArrowUpRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

