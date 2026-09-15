import { motion } from 'framer-motion'
import {
  BookOpen,
  Code2,
  FileText,
  GraduationCap,
  Layers3,
  Rocket,
  Smartphone,
} from 'lucide-react'

const journey = [
  {
    number: '01',
    period: '2024 — 2027',
    title: 'Computer Science Education',
    icon: GraduationCap,
    description:
      'Studying for a Bachelor of Science in Computer Science at the State University of Zanzibar (SUZA), building a foundation in computing, software development, databases, and problem solving.',
    label: 'FOUNDATION',
  },
  {
    number: '02',
    period: 'Exploring',
    title: 'Web Development',
    icon: Code2,
    description:
      'Exploring web technologies and learning how frontend interfaces can turn ideas into responsive and practical digital experiences.',
    label: 'EXPLORE',
  },
  {
    number: '03',
    period: 'Exploring',
    title: 'Mobile Development',
    icon: Smartphone,
    description:
      'Expanding into mobile application development through Android, Java, Android Studio, and SQLite while exploring different ways technology can solve practical needs.',
    label: 'EXPAND',
  },
  {
    number: '04',
    period: 'Through Projects',
    title: 'Practical Projects',
    icon: Layers3,
    description:
      'Learning through real project work, where ideas, requirements, interfaces, databases, and development come together into working software.',
    label: 'BUILD',
  },
  {
    number: '05',
    period: 'Developing',
    title: 'Technical Documentation',
    icon: FileText,
    description:
      'Developing experience in SRS, technical documentation, project proposals, research proposals, and business plans to communicate software ideas clearly.',
    label: 'DOCUMENT',
  },
  {
    number: '06',
    period: 'Developing',
    title: 'Java & Spring Boot',
    icon: Code2,
    description:
      'Working with Java, Spring Boot, REST APIs, and database-connected applications as part of my broader software development experience.',
    label: 'DEVELOP',
  },
  {
    number: '07',
    period: 'Growing',
    title: 'Exploring Software Development',
    icon: Rocket,
    description:
      'Continuing to strengthen my understanding of software development by connecting different technologies, project requirements, and practical problem solving.',
    label: 'GROW',
  },
  {
    number: '08',
    period: 'Currently Learning',
    title: 'Python, Django & React Native',
    icon: BookOpen,
    description:
      'Currently expanding my toolkit with Python, Django, and React Native while continuing to learn through practice and projects.',
    label: 'LEARNING',
  },
]

function JourneySection() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#FBF9F4] py-20 sm:py-24 lg:py-28"
    >
      {/* Background lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[7%] top-0 h-full w-px bg-[#0F4C4A]/[0.055]" />

        <div className="absolute left-[18%] top-0 hidden h-full w-px bg-[#C45A3C]/[0.035] lg:block" />

        <div className="absolute right-[8%] top-0 h-full w-px bg-[#0F4C4A]/[0.05]" />

        <div className="absolute right-[22%] top-0 hidden h-full w-px bg-[#B58A4A]/[0.035] lg:block" />

        <div className="absolute left-0 top-[12%] h-px w-full bg-[#0F4C4A]/[0.045]" />

        <div className="absolute left-0 top-[52%] h-px w-full bg-[#C45A3C]/[0.035]" />

        <div className="absolute left-0 top-[88%] h-px w-full bg-[#B58A4A]/[0.045]" />

        <div className="absolute left-[7%] top-[12%] h-2 w-2 rounded-full border border-[#C45A3C]/50 bg-[#FBF9F4]" />

        <div className="absolute right-[8%] top-[88%] h-2 w-2 rounded-full border border-[#B58A4A]/50 bg-[#FBF9F4]" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#0F4C4A]/[0.02] blur-3xl" />

        <div className="absolute -left-40 bottom-10 h-96 w-96 rounded-full bg-[#C45A3C]/[0.018] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl lg:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#C45A3C]">
              04
            </span>

            <span className="h-px w-10 bg-[#B58A4A]" />

            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#0F4C4A]">
              My Journey
            </span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.04em] text-[#172321] sm:text-4xl lg:text-5xl">
            From learning the{' '}
            <span className="text-[#0F4C4A]">foundations</span> to building
            practical solutions.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#68716D] sm:text-lg">
            My journey is not a straight line. It is a continuous process of
            exploring technology, building projects, solving problems, and
            discovering what I can create next.
          </p>
        </motion.div>

        {/* Journey timeline */}
        <div className="relative">

          {/* Central timeline */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-[#D5CEC2] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-14">
            {journey.map((item, index) => {
              const Icon = item.icon
              const isRight = index % 2 !== 0

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: isRight ? 25 : -25,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.04,
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* Timeline marker */}
                  <div className="absolute left-[8px] top-7 z-10 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#FBF9F4] bg-[#0F4C4A] md:left-1/2 md:-translate-x-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-14 md:pl-0 ${
                      isRight
                        ? 'md:col-start-2'
                        : 'md:col-start-1 md:text-right'
                    }`}
                  >
                    <div
                      className={`group relative rounded-[1.5rem] border border-[#DDD6CA] bg-white p-6 shadow-[0_12px_40px_rgba(23,35,33,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B9C9C3] hover:shadow-[0_20px_50px_rgba(23,35,33,0.07)] sm:p-7 ${
                        isRight ? '' : 'md:ml-auto'
                      } max-w-xl`}
                    >
                      {/* Corner detail */}
                      <div
                        className={`absolute top-0 h-14 w-14 border-[#0F4C4A]/10 ${
                          isRight
                            ? 'right-0 rounded-bl-[1.5rem] border-b border-l'
                            : 'left-0 rounded-br-[1.5rem] border-b border-r'
                        }`}
                      />

                      <div
                        className={`flex items-start justify-between gap-4 ${
                          isRight ? '' : 'md:flex-row-reverse'
                        }`}
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF1EE] text-[#0F4C4A] transition-all duration-300 group-hover:bg-[#0F4C4A] group-hover:text-white">
                          <Icon size={20} strokeWidth={1.7} />
                        </div>

                        <span className="font-mono text-[10px] font-bold tracking-[0.12em] text-[#B2AAA0]">
                          {item.number}
                        </span>
                      </div>

                      <div
                        className={`mt-5 ${
                          isRight ? '' : 'md:flex md:flex-col md:items-end'
                        }`}
                      >
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[#F5F2EC] px-2.5 py-1 font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#9A9185]">
                            {item.period}
                          </span>

                          <span className="font-mono text-[8px] font-bold uppercase tracking-[0.12em] text-[#C45A3C]">
                            {item.label}
                          </span>
                        </div>

                        <h3 className="mt-3 text-xl font-bold tracking-[-0.025em] text-[#172321] sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-[#737B77] sm:text-base">
                          {item.description}
                        </p>
                      </div>

                      <div
                        className={`mt-6 flex items-center gap-2 ${
                          isRight ? '' : 'md:flex-row-reverse'
                        }`}
                      >
                        <span className="h-px w-6 bg-[#B58A4A] transition-all duration-300 group-hover:w-10" />

                        <span className="font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-[#A0978B]">
                          Step {item.number}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-[1.5rem] border border-[#D8CDBE] bg-white p-7 sm:mt-20 sm:p-9"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#C45A3C]">
                The journey continues
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-[-0.025em] text-[#172321]">
                Learn. Build. Solve. Grow.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#737B77]">
                Every project adds a new lesson, every challenge creates an
                opportunity to improve, and every new skill opens another
                direction to explore.
              </p>
            </div>

            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EAF1EE] text-[#0F4C4A] sm:flex">
              <Rocket size={25} strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Bottom line */}
        <div className="mt-14 flex items-center gap-3 border-t border-[#D8D1C6] pt-6">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9185]">
            Direction
          </span>

          <span className="h-px w-8 bg-[#B58A4A]" />

          <span className="text-xs font-medium text-[#707975]">
            Keep exploring. Keep building. Keep moving forward.
          </span>
        </div>
      </div>
    </section>
  )
}

export default JourneySection

