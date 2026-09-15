import { motion } from 'framer-motion'
import {
  BookOpen,
  Braces,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Smartphone,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    icon: Globe,
    title: 'Web Development',
    description:
      'Building responsive web interfaces and practical web applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    number: '02',
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Developing and exploring mobile applications with Android technologies.',
    skills: ['Android', 'Java', 'Android Studio', 'SQLite'],
  },
  {
    number: '03',
    icon: Braces,
    title: 'Programming',
    description:
      'Programming languages developed through coursework and practical projects.',
    skills: ['C', 'C++', 'C#', 'Java', 'JavaScript'],
  },
  {
    number: '04',
    icon: FileCode2,
    title: 'Development & APIs',
    description:
      'Working with application development, backend-connected systems, and APIs.',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    number: '05',
    icon: Database,
    title: 'Databases',
    description:
      'Working with relational databases for application data storage and management.',
    skills: ['PostgreSQL', 'Oracle Database', 'SQLite'],
  },
  {
    number: '06',
    icon: Wrench,
    title: 'Development Tools',
    description:
      'Tools that support coding, version control, testing, and project development.',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
  {
    number: '07',
    icon: BookOpen,
    title: 'Technical Documentation',
    description:
      'Documenting software requirements, project ideas, systems, and research clearly.',
    skills: [
      'SRS',
      'Technical Documentation',
      'Project Proposals',
      'Research Proposals',
      'Business Plans',
    ],
  },
]

const learning = ['Python', 'Django', 'React Native']

function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F7F3EB] py-20 sm:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[7%] top-0 h-full w-px bg-[#0F4C4A]/[0.05]" />
        <div className="absolute right-[7%] top-0 h-full w-px bg-[#C45A3C]/[0.04]" />

        <div className="absolute left-0 top-[18%] h-px w-full bg-[#0F4C4A]/[0.04]" />
        <div className="absolute left-0 top-[82%] h-px w-full bg-[#B58A4A]/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="section-frame border-[#D2CABE]">
          <div className="px-0 py-12 sm:py-16 lg:py-20">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="section-number text-[#B58A4A]">
                03 / Skills
              </div>

              <div className="grid gap-8 lg:grid-cols-[1fr_0.55fr] lg:items-end">
                <div>
                  <p className="technical-label text-[#C45A3C]">
                    Technologies & capabilities
                  </p>

                  <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#172321] sm:text-5xl lg:text-6xl">
                    Tools I use to
                    <span className="block text-[#0F4C4A]">
                      build practical solutions.
                    </span>
                  </h2>
                </div>

                <p className="max-w-sm text-sm leading-7 text-[#69736F] lg:ml-auto">
                  My skills have developed through university coursework,
                  personal projects, experimentation, and continuous practice.
                </p>
              </div>
            </motion.div>

            {/* Skills directory */}
            <div className="mt-14 border-y border-[#D2CABE] sm:mt-16">
              {skillGroups.map((group, index) => {
                const Icon = group.icon

                return (
                  <motion.article
                    key={group.number}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                    }}
                    className={`group grid gap-6 py-8 transition-all duration-300 sm:py-9 lg:grid-cols-[70px_250px_1fr] lg:items-start lg:gap-8 ${
                      index !== skillGroups.length - 1
                        ? 'border-b border-[#D2CABE]'
                        : ''
                    } hover:bg-[#F0EBE1] hover:px-4 sm:hover:px-5`}
                  >
                    {/* Number + icon */}
                    <div className="flex items-center justify-between lg:block">
                      <span className="font-mono text-xs font-bold tracking-[0.16em] text-[#B58A4A] transition-colors duration-300 group-hover:text-[#C45A3C]">
                        {group.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center border border-[#C8D5D0] bg-[#E9F0ED] text-[#0F4C4A] transition-all duration-300 group-hover:border-[#C45A3C] group-hover:bg-[#C45A3C] group-hover:text-white group-hover:scale-105 lg:mt-5">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-[#172321] transition-colors duration-300 group-hover:text-[#0F4C4A] sm:text-2xl">
                        {group.title}
                      </h3>

                      <div className="mt-3 h-px w-8 bg-[#C45A3C] transition-all duration-300 group-hover:w-14" />

                      <p className="mt-4 max-w-md text-sm leading-6 text-[#737B77] transition-colors duration-300 group-hover:text-[#4F5B56]">
                        {group.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap content-start gap-x-5 gap-y-3 lg:pt-1">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="border-b border-[#CFC7BA] pb-1 font-mono text-xs font-medium text-[#42514C] transition-all duration-200 hover:border-[#C45A3C] hover:text-[#C45A3C] sm:text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.article>
                )
              })}
            </div>

            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="group mt-14 border border-[#D2CABE] bg-[#FBF8F1] transition-all duration-300 hover:border-[#C45A3C] hover:bg-[#F8F1E8] sm:mt-16"
            >
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-[#E3C9BC] bg-[#F8EDE8] text-[#C45A3C] transition-all duration-300 group-hover:bg-[#C45A3C] group-hover:text-white">
                      <GitBranch size={18} strokeWidth={1.6} />
                    </div>

                    <div>
                      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#C45A3C]">
                        Currently learning
                      </p>

                      <h3 className="mt-1 text-xl font-semibold text-[#172321] transition-colors duration-300 group-hover:text-[#0F4C4A] sm:text-2xl">
                        Expanding my toolkit.
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-[#737B77] sm:text-base">
                    I am continuously strengthening my development skills by
                    exploring new technologies and applying what I learn
                    through practical work.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {learning.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#C8D5D0] bg-[#EEF3F0] px-4 py-2 font-mono text-xs font-semibold text-[#0F4C4A] transition-all duration-200 hover:border-[#C45A3C] hover:bg-[#C45A3C] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bottom message */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-10 border-t border-[#D2CABE] pt-6 sm:mt-12"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#9A9185]">
                    Growth
                  </span>

                  <span className="h-px w-8 bg-[#C45A3C]" />

                  <span className="text-xs leading-5 text-[#707975] sm:text-sm">
                    Skills grow through practice, projects, and continuous
                    learning.
                  </span>
                </div>

                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-[#0F4C4A] transition-colors duration-200 hover:text-[#C45A3C]">
                  Learn · Build · Improve
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

