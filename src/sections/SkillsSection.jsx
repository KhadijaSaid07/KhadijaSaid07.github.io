import { motion } from 'framer-motion'
import {
  BookOpen,
  Braces,
  Database,
  FileCode2,
  Globe,
  Smartphone,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Technologies I use to build modern web interfaces and applications.',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description:
      'Tools and technologies I use while developing and exploring mobile applications.',
    skills: ['Android', 'Java', 'Android Studio', 'SQLite'],
  },
  {
    icon: Braces,
    title: 'Programming',
    description:
      'Programming languages I have worked with through study and practical projects.',
    skills: ['C', 'C++', 'C#', 'Java', 'JavaScript'],
  },
  {
    icon: FileCode2,
    title: 'Development & APIs',
    description:
      'Technologies I have used for application development and backend-connected systems.',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Databases',
    description:
      'Database technologies I have worked with for storing and managing application data.',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle Database'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    description:
      'Development tools and platforms that support my everyday workflow.',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
  {
    icon: BookOpen,
    title: 'Technical Documentation',
    description:
      'Documentation areas I work with to communicate software ideas and requirements clearly.',
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
      className="bg-[#F8F6F1] px-5 py-20 text-[#242826] sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-[-0.035em] text-[#242826] sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-[#6F746F] sm:text-lg sm:leading-8">
            I build with technologies I have studied, practiced, and applied
            through real projects. I focus on understanding the tools I use
            and choosing the right technology for the problem.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                className="group rounded-2xl border border-[#E5E0D7] bg-white p-6 shadow-[0_8px_25px_rgba(36,40,38,0.035)] transition-all duration-200 hover:-translate-y-1 hover:border-[#326460]/35 hover:shadow-[0_14px_32px_rgba(36,40,38,0.08)] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#326460]/10 text-[#326460] transition-all duration-200 group-hover:bg-[#326460] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#242826]">
                  {group.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#6F746F]">
                  {group.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-[#E5E0D7] bg-[#F8F6F1] px-3 py-2 text-xs font-medium text-[#242826] transition-colors duration-200 group-hover:border-[#326460]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mt-6 rounded-2xl border border-[#E5E0D7] bg-white p-6 sm:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#A03F28]">
            Currently Learning
          </p>

          <p className="mt-3 text-sm leading-6 text-[#6F746F] sm:text-base">
            Learning new technologies through practice and projects.
          </p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {learning.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-[#E5E0D7] bg-[#F8F6F1] px-4 py-2.5 text-sm font-medium text-[#242826] transition-colors duration-200 hover:border-[#A03F28]/45 hover:text-[#A03F28]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection

