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
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    skills: ['Android', 'Java', 'Android Studio', 'SQLite'],
  },
  {
    icon: Braces,
    title: 'Programming',
    skills: ['C', 'C++', 'C#', 'Java', 'JavaScript'],
  },
  {
    icon: FileCode2,
    title: 'Development & APIs',
    skills: ['Java', 'Spring Boot', 'REST APIs'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQLite', 'Oracle Database'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio', 'Trello'],
  },
  {
    icon: BookOpen,
    title: 'Technical Documentation',
    skills: [
      'SRS',
      'Technical Documentation',
      'Project Proposals',
      'Research Proposals',
      'Business Plans',
    ],
  },
  {
    icon: BookOpen,
    title: 'Currently Learning',
    skills: ['Python', 'Django', 'React Native'],
  },
]

function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#F8F6F1] px-5 py-16 text-[#242826] sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#A03F28]">
            Skills
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-[-0.035em] text-[#242826] sm:text-4xl lg:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6F746F] sm:text-base">
            Technologies I have studied, practiced, and used through real
            projects and continuous learning.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-3 sm:mt-10 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                className="group rounded-xl border border-[#E5E0D7] bg-white p-4 shadow-[0_5px_18px_rgba(36,40,38,0.03)] transition-all duration-250 hover:-translate-y-1 hover:border-[#326460]/50 hover:shadow-[0_12px_28px_rgba(36,40,38,0.10)] sm:p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#326460]/10 text-[#326460] transition-all duration-250 group-hover:scale-105 group-hover:bg-[#326460] group-hover:text-white">
                    <Icon size={17} strokeWidth={1.8} />
                  </div>

                  <span className="text-[10px] font-medium text-[#B0B3AE] transition-colors duration-200 group-hover:text-[#326460]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-[#242826] transition-colors duration-200 group-hover:text-[#326460]">
                  {group.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-[#E5E0D7] bg-[#F8F6F1] px-2.5 py-1.5 text-[11px] font-medium text-[#242826] transition-all duration-200 group-hover:border-[#326460]/20 group-hover:bg-[#F3F7F5]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection

