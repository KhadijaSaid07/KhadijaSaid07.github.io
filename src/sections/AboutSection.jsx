import { motion } from 'framer-motion'
import { Code2, FileText, Smartphone } from 'lucide-react'

const aboutCards = [
  {
    number: '01',
    title: 'What I Do',
    icon: Code2,
    text: 'Web Development · Mobile Apps · Technical Documentation  . Technical Support',
  },
  {
    number: '02',
    title: 'What I Build',
    icon: Smartphone,
    text: 'Practical digital solutions and user-focused applications.',
  },
  {
    number: '03',
    title: 'Currently Learning',
    icon: FileText,
    text: 'Python · Django · React Native',
  },
]

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F2EDE3] py-16 sm:py-20 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#173330]/10" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#C85D3D]/10" />
        <div className="absolute left-0 top-[18%] h-px w-full bg-[#173330]/10" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="section-frame border-[#CFC7BA]">
          <div className="px-0 py-8 sm:py-10 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="section-number text-[#B58A4A]">
                02 / About Me
              </div>

              <div className="mt-4 max-w-4xl">
                <p className="technical-label text-[#C85D3D]">Who I am</p>

                <h2 className="mt-2 text-4xl font-semibold leading-[1.08] tracking-tight text-[#172321] sm:text-5xl lg:text-6xl">
                  Building practical solutions
                  <span className="block text-[#0F4C4A]">
                    through technology.
                  </span>
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[#56625D] sm:text-lg sm:leading-8">
                  I&apos;m Khadija Ali Said, a Web &amp; Mobile Developer and
                  Computer Science student. I build practical digital solutions
                  through web development, mobile applications, and technical
                  documentation and support.I believe in learning through building,
                  solving problems with purpose, and continuously improving my
                  skills to turn ideas into meaningful digital solutions.
                </p>
              </div>
            </motion.div>

            <div className="mt-7 grid border border-[#CFC7BA] md:grid-cols-3">
              {aboutCards.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className={`group bg-[#F8F4EC] p-5 transition-all duration-300 hover:bg-[#F4EFE5] sm:p-6 ${
                      index !== aboutCards.length - 1
                        ? 'border-b border-[#CFC7BA] md:border-b-0 md:border-r'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] font-bold tracking-[0.16em] text-[#B58A4A]">
                        {item.number}
                      </span>

                      <Icon
                        size={19}
                        strokeWidth={1.7}
                        className="text-[#0F4C4A] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-5 text-base font-semibold text-[#172321] transition-colors duration-200 group-hover:text-[#0F4C4A]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#737B77]">
                      {item.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

