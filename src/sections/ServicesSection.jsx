import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Code2,
  FileText,
  Smartphone,
  Users,
  Wrench,
} from 'lucide-react'

const services = [
  {
    number: '01',
    title: 'Web Development',
    icon: Code2,
    description:
      'Building practical and responsive web applications with modern frontend technologies and structured backend services.',
    tools: 'React · JavaScript · HTML · CSS · Spring Boot',
  },
  {
    number: '02',
    title: 'Mobile Development',
    icon: Smartphone,
    description:
      'Developing mobile application interfaces and functionality with a focus on usability, clear structure, and practical solutions.',
    tools: 'Android · Java · Android Studio · SQLite',
  },
  {
    number: '03',
    title: 'Frontend Development',
    icon: Wrench,
    description:
      'Creating responsive user interfaces that turn application requirements into clean, usable digital experiences.',
    tools: 'React · Tailwind CSS · JavaScript',
  },
  {
    number: '04',
    title: 'Technical Documentation',
    icon: FileText,
    description:
      'Preparing structured technical documents that explain software systems, requirements, project ideas, and implementation plans.',
    tools: 'SRS · Technical Documentation · Proposals',
  },
  {
    number: '05',
    title: 'Student & Application Support',
    icon: Users,
    description:
      'Helping turn academic and practical software ideas into clearer requirements, interfaces, documentation, and working prototypes.',
    tools: 'Planning · Requirements · UI Implementation',
  },
  {
    number: '06',
    title: 'Continuous Learning',
    icon: BookOpen,
    description:
      'Continuously exploring new technologies and improving through practical projects rather than learning only through theory.',
    tools: 'Python · Django · React Native',
  },
]

const projects = [
  {
    number: 'P01',
    title: 'Smart Marketplace for Local Businesses',
    type: 'Web Application',
    description:
      'A marketplace concept designed to connect customers with local businesses, products, services, and delivery operations.',
  },
  {
    number: 'P02',
    title: 'Smart Revision System',
    type: 'Web Application',
    description:
      'A learning platform concept designed to help students organize revision activities, learning resources, and study schedules.',
  },
]

function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const [showProjects, setShowProjects] = useState(false)

  const selectedService = services[activeService]
  const SelectedIcon = selectedService.icon

  return (
    <section
      id="services"
      className="bg-[#101716] text-[#F4EFE5] py-24 md:py-32"
    >
      <div className="portfolio-shell">
        <div className="section-frame">
          <div className="px-5 py-16 md:px-10 lg:px-14">
            <div className="section-number">03 / Services</div>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="technical-label mb-5">
                  What I build and support
                </p>

                <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Practical work,
                  <span className="block text-[#D96B48]">
                    not just ideas.
                  </span>
                </h2>

                <p className="mt-7 max-w-lg text-base leading-8 text-[#9CA7A1] md:text-lg">
                  My work combines software development, interface
                  implementation, documentation, and continuous learning to
                  turn ideas into usable digital solutions.
                </p>

                <button
                  type="button"
                  onClick={() => setShowProjects((current) => !current)}
                  aria-expanded={showProjects}
                  className="mt-9 inline-flex items-center gap-3 border border-[#D6AD5D] bg-[#D6AD5D] px-5 py-3 text-sm font-semibold text-[#101716]"
                >
                  {showProjects ? 'Hide Projects' : 'Explore Projects'}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>

              <div className="border border-[#354541] bg-[#172321]">
                <div className="grid md:grid-cols-2">
                  <div className="border-b border-[#354541] md:border-b-0 md:border-r">
                    {services.map((service, index) => {
                      const Icon = service.icon
                      const isActive = index === activeService

                      return (
                        <button
                          key={service.number}
                          type="button"
                          onClick={() => setActiveService(index)}
                          aria-selected={isActive}
                          className={`flex w-full items-center gap-4 border-b border-[#354541] px-5 py-5 text-left last:border-b-0 ${
                            isActive
                              ? 'bg-[rgba(217,107,72,0.12)] text-[#F4EFE5]'
                              : 'text-[#9CA7A1]'
                          }`}
                        >
                          <span
                            className={`w-8 text-xs font-bold ${
                              isActive
                                ? 'text-[#D6AD5D]'
                                : 'text-[#66736E]'
                            }`}
                          >
                            {service.number}
                          </span>

                          <Icon
                            className={`h-5 w-5 ${
                              isActive
                                ? 'text-[#D96B48]'
                                : 'text-[#66736E]'
                            }`}
                          />

                          <span className="text-sm font-medium">
                            {service.title}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="flex min-h-[340px] flex-col justify-between p-7 md:p-8">
                    <div>
                      <div className="mb-8 flex items-center justify-between">
                        <SelectedIcon className="h-8 w-8 text-[#D96B48]" />

                        <span className="text-xs font-bold tracking-[0.2em] text-[#D6AD5D]">
                          {selectedService.number}
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold text-[#F4EFE5]">
                        {selectedService.title}
                      </h3>

                      <p className="mt-5 leading-7 text-[#9CA7A1]">
                        {selectedService.description}
                      </p>
                    </div>

                    <div className="mt-10 border-t border-[#354541] pt-5">
                      <p className="text-xs uppercase tracking-[0.16em] text-[#D6AD5D]">
                        Technologies / focus
                      </p>

                      <p className="mt-2 text-sm text-[#D7D0C4]">
                        {selectedService.tools}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {showProjects && (
              <div className="mt-16 border-t border-[#354541] pt-12">
                <div className="mb-8">
                  <p className="technical-label mb-3">
                    Selected work
                  </p>

                  <h3 className="text-2xl font-semibold md:text-3xl">
                    Explore what I have built.
                  </h3>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {projects.map((project) => (
                    <article
                      key={project.number}
                      className="border border-[#354541] bg-[#172321] p-6 md:p-8"
                    >
                      <div className="flex items-start justify-between gap-5">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#D6AD5D]">
                          {project.number}
                        </span>

                        <span className="border border-[#354541] px-3 py-1 text-xs text-[#9CA7A1]">
                          {project.type}
                        </span>
                      </div>

                      <h4 className="mt-8 text-xl font-semibold text-[#F4EFE5] md:text-2xl">
                        {project.title}
                      </h4>

                      <p className="mt-4 leading-7 text-[#9CA7A1]">
                        {project.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => {
                          document
                            .getElementById('projects')
                            ?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="mt-7 inline-flex items-center gap-2 border-b border-[#D6AD5D] pb-1 text-sm font-semibold text-[#D6AD5D]"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection

