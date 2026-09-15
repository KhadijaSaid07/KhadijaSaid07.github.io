import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BriefcaseBusiness,
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
    icon: BriefcaseBusiness,
    label: 'LinkedIn',
    value: 'Khadija Ali Said',
    href: 'https://www.linkedin.com/in/khadija-ali-said-353926363',
  },
]

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#101716] px-5 py-20 text-[#F4EFE5] sm:px-8 md:py-24 lg:py-28"
    >
      <div className="portfolio-shell">
        <div className="section-frame">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="section-number">06 / CONTACT</p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Let&apos;s build something useful.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-[#9CA7A1] sm:text-lg">
                Have an idea, project, collaboration, or technical
                documentation need? I&apos;d be happy to hear about it.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#9CA7A1]">
                <MapPin size={18} className="text-[#D6AD5D]" />
                <span>Zanzibar, Tanzania</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-t border-[#354541]"
            >
              {contactItems.map((item, index) => {
                const Icon = item.icon

                return (
                  <a
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
                    className="group flex items-center gap-4 border-b border-[#354541] py-5 transition-colors duration-300 hover:bg-[#172321] sm:gap-6 sm:py-6"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#354541] text-[#D6AD5D] transition-all duration-300 group-hover:border-[#D96B48] group-hover:bg-[#D96B48] group-hover:text-white">
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs uppercase tracking-[0.18em] text-[#6F7B76]">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-[#F4EFE5] transition-colors duration-300 group-hover:text-[#D6AD5D] sm:text-base">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[#6F7B76] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#D96B48]"
                    />
                  </a>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 border border-[#354541] bg-[#172321] p-6 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#D6AD5D]">
                  KHALSA360
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#F4EFE5]">
                  Learn. Build. Solve. Grow.
                </h3>

                <p className="mt-2 max-w-xl text-sm leading-6 text-[#9CA7A1]">
                  Building practical digital solutions while continuously
                  improving through real projects and learning.
                </p>
              </div>

              <a
                href="mailto:khadija09said09@gmail.com"
                className="inline-flex w-fit items-center gap-2 border border-[#D96B48] px-5 py-3 text-sm font-medium text-[#F4EFE5] transition-all duration-300 hover:bg-[#D96B48] hover:text-white"
              >
                Send an Email
                <ArrowUpRight size={17} />
              </a>
            </div>
          </motion.div>

          <div className="mt-8 border-t border-[#354541] pt-6">
            <p className="max-w-3xl text-sm leading-6 text-[#6F7B76]">
              Open to learning, building meaningful projects, collaborating
              with others, and contributing to practical technology solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

