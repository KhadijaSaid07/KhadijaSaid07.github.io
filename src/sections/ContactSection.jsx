import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Link, Mail, MapPin, Phone } from 'lucide-react'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'khadija09said09@gmail.com',
    href: 'mailto:khadija09said09@gmail.com',
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
      className="relative overflow-hidden bg-[#FFF3E8] px-5 py-16 text-[#252525] sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute -right-24 top-16 h-64 w-64 rounded-full bg-[#D96B4A]/[0.06] sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">
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
          }}
          className="max-w-3xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D96B4A]">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#252525] sm:text-5xl lg:text-6xl">
            Let&apos;s build something useful.
          </h2>

          <div className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-[#6F6A66]">
            <MapPin
              size={18}
              strokeWidth={1.8}
              className="text-[#D96B4A]"
            />
            <span>Zanzibar, Tanzania</span>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-10 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  item.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 14,
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
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : index * 0.04,
                }}
                className="group flex min-h-[100px] flex-col justify-between rounded-xl border border-[#E8D8CC] bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#D96B4A] hover:shadow-[0_8px_22px_rgba(107,58,58,0.08)] sm:min-h-[105px] sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E8D8CC] text-[#6B3A3A] transition-colors duration-200 group-hover:border-[#D96B4A] group-hover:bg-[#D96B4A] group-hover:text-white">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="text-[#6F6A66] transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D96B4A]"
                  />
                </div>

                <div className="mt-3 min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6F6A66]">
                    {item.label}
                  </p>

                  <p className="mt-1 break-words text-xs font-medium leading-5 text-[#252525] transition-colors duration-200 group-hover:text-[#D96B4A] sm:text-sm">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </div>

        <motion.div
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
            amount: 0.2,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.5,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="mt-7 flex flex-col gap-3 border-t border-[#E8D8CC] pt-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-sm text-[#6F6A66]">
            Available for projects, collaboration, and technical work.
          </p>

          <a
            href="mailto:khadija09said09@gmail.com"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#D96B4A] transition-colors hover:text-[#C65D3E]"
          >
            Send an Email
            <ArrowUpRight
              size={17}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection

