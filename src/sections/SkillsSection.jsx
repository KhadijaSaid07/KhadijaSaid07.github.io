import { motion } from 'framer-motion'
import {
  BookOpen,
  Code2,
  FileText,
  Lightbulb,
  Smartphone,
} from 'lucide-react'

const focusAreas = [
  {
    icon: Code2,
    number: '01',
    title: 'Web Development',
    text: 'Building responsive web applications with practical interfaces and clear user experiences.',
  },
  {
    icon: Smartphone,
    number: '02',
    title: 'Mobile Development',
    text: 'Exploring Android and mobile application development for practical everyday needs.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Technical Documentation',
    text: 'Turning software ideas, requirements, and system concepts into clear documentation.',
  },
]

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F2EDE3] py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#173330]/10" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#C85D3D]/10" />
        <div className="absolute left-0 top-[18%] h-px w-full bg-[#173330]/10" />
        <div className="absolute left-0 bottom-[16%] h-px w-full bg-[#B58A4A]/15" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="section-frame border-[#CFC7BA]">
          <div className="px-0 py-12 sm:py-16 lg:py-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-number text-[#B58A4A]">
                02 / About Me
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                <div>
                  <p className="technical-label text-[#C85D3D]">
                    Who I am
                  </p>

                  <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#172321] sm:text-5xl lg:text-6xl">
                    Learning technology by
                    <span className="block text-[#0F4C4A]">
                      building real things.
                    </span>
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#69736F] lg:ml-auto">
                  Computer Science student focused on practical software
                  development, problem solving, and continuous improvement.
                </p>
              </div>
            </motion.div>

            {/* Main story */}
            <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              {/* Approach */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <div className="border border-[#CFC7BA] bg-[#F8F4EC] p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center border border-[#BFD0C9] bg-[#E7EFEB] text-[#0F4C4A]">
                      <Lightbulb size={21} strokeWidth={1.7} />
                    </div>

                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#B58A4A]">
                      01
                    </span>
                  </div>

                  <p className="mt-8 font-mono text-[10px] font-bold tracking-[0.18em] text-[#C85D3D]">
                    MY APPROACH
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold leading-tight text-[#172321] sm:text-3xl">
                    Learn it.
                    <br />
                    Build it.
                    <br />
                    Improve it.
                  </h3>

                  <div className="my-7 h-px w-12 bg-[#B58A4A]" />

                  <p className="text-sm leading-7 text-[#69736F] sm:text-base">
                    I learn best through practice. I take an idea, understand
                    the problem behind it, build a solution, test it, and
                    improve it.
                  </p>

                  <div className="mt-8 flex items-center gap-3 border-t border-[#D9D1C5] pt-5">
                    <BookOpen
                      size={16}
                      className="text-[#0F4C4A]"
                      strokeWidth={1.7}
                    />

                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#737C78]">
                      Always learning
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Professional story */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
              >
                <div className="border-l-2 border-[#B58A4A] pl-6 sm:pl-8">
                  <p className="text-base leading-8 text-[#56625D] sm:text-lg">
                    I am a Computer Science student at the{' '}
                    <strong className="font-semibold text-[#172321]">
                      State University of Zanzibar (SUZA)
                    </strong>
                    , developing my skills through academic learning and
                    practical software projects.
                  </p>

                  <p className="mt-6 text-base leading-8 text-[#56625D] sm:text-lg">
                    My experience includes{' '}
                    <strong className="font-semibold text-[#0F4C4A]">
                      React, Java, Spring Boot, databases, Android development,
                      and REST APIs
                    </strong>
                    . I use these technologies as tools for solving practical
                    problems.
                  </p>

                  <p className="mt-6 text-base leading-8 text-[#56625D] sm:text-lg">
                    I also enjoy technical documentation, where I organize
                    requirements, ideas, and system concepts into clear and
                    useful documents.
                  </p>

                  <p className="mt-6 text-base leading-8 text-[#56625D] sm:text-lg">
                    Currently, I am expanding my skills in{' '}
                    <strong className="font-semibold text-[#C85D3D]">
                      Python, Django, and React Native
                    </strong>
                    .
                  </p>
                </div>

                {/* Development path */}
                <div className="mt-10 border-t border-[#CFC7BA] pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#8A8278]">
                      Development process
                    </span>

                    <Code2
                      size={17}
                      strokeWidth={1.7}
                      className="text-[#0F4C4A]"
                    />
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-3 font-mono text-[10px] font-bold sm:text-xs">
                    <span className="text-[#0F4C4A]">IDEA</span>
                    <span className="text-[#B58A4A]">→</span>
                    <span className="text-[#0F4C4A]">PLAN</span>
                    <span className="text-[#B58A4A]">→</span>
                    <span className="text-[#0F4C4A]">BUILD</span>
                    <span className="text-[#B58A4A]">→</span>
                    <span className="text-[#C85D3D]">TEST</span>
                    <span className="text-[#B58A4A]">→</span>
                    <span className="text-[#C85D3D]">IMPROVE</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Focus areas */}
            <div className="mt-16 grid border border-[#CFC7BA] md:grid-cols-3 lg:mt-20">
              {focusAreas.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className={`p-6 sm:p-8 ${
                      index !== focusAreas.length - 1
                        ? 'border-b border-[#CFC7BA] md:border-b-0 md:border-r'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <Icon
                        size={22}
                        strokeWidth={1.6}
                        className="text-[#0F4C4A]"
                      />

                      <span className="font-mono text-[10px] font-bold text-[#B58A4A]">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-7 text-lg font-semibold text-[#172321]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[#737B77]">
                      {item.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            {/* Bottom statement */}
            <div className="mt-10 flex flex-col gap-3 border-t border-[#CFC7BA] pt-6 sm:flex-row sm:items-center sm:gap-4">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#C85D3D]">
                Growth
              </span>

              <span className="hidden h-px w-8 bg-[#B58A4A] sm:block" />

              <p className="text-sm text-[#737B77]">
                Building experience one practical project at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

