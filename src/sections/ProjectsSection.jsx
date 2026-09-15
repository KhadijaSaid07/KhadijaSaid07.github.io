import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'

const projects = [
  {
    id: 'marketplace',
    number: '01',
    title: 'Smart Marketplace for Local Businesses',
    category: 'WEB APPLICATION',
    description:
      'A practical marketplace platform designed to connect customers with local businesses, products, services, and delivery operations.',
    technologies: 'React · JavaScript · Tailwind CSS',
    screenshots: [
      {
        title: 'Landing Page',
        image: '/images/Smart Marketplace/landing-page.png',
      },
      {
        title: 'Customer Dashboard',
        image: '/images/Smart Marketplace/customer-dashboard.png',
      },
      {
        title: 'Business Dashboard',
        image: '/images/Smart Marketplace/Business-Dashboard.png',
      },
      {
        title: 'Delivery Dashboard',
        image: '/images/Smart Marketplace/delivery-dashboard.png',
      },
    ],
  },
  {
    id: 'revision',
    number: '02',
    title: 'Smart Revision System',
    category: 'EDUCATION PLATFORM',
    description:
      'A learning platform designed to support students with revision activities, learning resources, study planning, and structured learning experiences.',
    technologies: 'React · Tailwind CSS · Spring Boot · PostgreSQL',
    screenshots: [
      {
        title: 'Landing Page',
        image: '/images/Smart Revision System/landinghome.png',
      },
      {
        title: 'Features',
        image: '/images/Smart Revision System/landingfeatures.png',
      },
      {
        title: 'How It Works',
        image: '/images/Smart Revision System/landinghowitwork.png',
      },
      {
        title: 'Study Hub',
        image: '/images/Smart Revision System/Studyhub.png',
      },
      {
        title: 'Schedule',
        image: '/images/Smart Revision System/Schedule.png',
      },
    ],
  },
]

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [activeScreenshot, setActiveScreenshot] = useState(0)

  useEffect(() => {
    const handleProjectSelection = (event) => {
      const projectId = event.detail?.projectId

      const projectIndex = projects.findIndex(
        (item) => item.id === projectId,
      )

      if (projectIndex === -1) {
        return
      }

      setActiveProject(projectIndex)
      setActiveScreenshot(0)
    }

    window.addEventListener(
      'portfolio:select-project',
      handleProjectSelection,
    )

    return () => {
      window.removeEventListener(
        'portfolio:select-project',
        handleProjectSelection,
      )
    }
  }, [])

  const project = projects[activeProject]
  const screenshot = project.screenshots[activeScreenshot]

  const changeProject = (index) => {
    setActiveProject(index)
    setActiveScreenshot(0)
  }

  const previousScreenshot = () => {
    setActiveScreenshot((current) =>
      current === 0 ? project.screenshots.length - 1 : current - 1,
    )
  }

  const nextScreenshot = () => {
    setActiveScreenshot((current) =>
      current === project.screenshots.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <section
      id="projects"
      className="bg-[#181614] py-24 text-[#F4EFE5] md:py-32"
    >
      <div className="portfolio-shell">
        <div className="section-frame border-[#443D37]">
          <div className="px-5 py-16 md:px-10 lg:px-14">
            <div className="section-number text-[#D6AD5D]">
              07 / Selected Work
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
              <div>
                <p className="technical-label mb-5 text-[#D96B48]">
                  Projects / Practical Work
                </p>

                <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Ideas turned into
                  <span className="block text-[#D96B48]">
                    working experiences.
                  </span>
                </h2>

                <p className="mt-7 max-w-lg text-base leading-8 text-[#A9A29A] md:text-lg">
                  Explore selected projects through their actual interfaces
                  and application screens.
                </p>

                <div className="mt-10 border-t border-[#443D37]">
                  {projects.map((item, index) => {
                    const isActive = index === activeProject

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => changeProject(index)}
                        aria-selected={isActive}
                        className={`flex w-full items-center gap-4 border-b border-[#443D37] py-5 text-left ${
                          isActive
                            ? 'text-[#F4EFE5]'
                            : 'text-[#847D76]'
                        }`}
                      >
                        <span className="w-8 text-xs font-bold tracking-widest text-[#D6AD5D]">
                          {item.number}
                        </span>

                        <span className="text-sm font-semibold md:text-base">
                          {item.title}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <div className="mb-7 flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold tracking-[0.2em] text-[#D6AD5D]">
                      {project.category}
                    </p>

                    <h3 className="mt-3 max-w-2xl text-2xl font-semibold md:text-4xl">
                      {project.title}
                    </h3>
                  </div>

                  <span className="border border-[#443D37] px-3 py-2 text-xs text-[#A9A29A]">
                    {project.number}
                  </span>
                </div>

                <div className="mb-7 grid gap-5 md:grid-cols-[1fr_auto]">
                  <p className="max-w-2xl leading-7 text-[#A9A29A]">
                    {project.description}
                  </p>

                  <div className="md:text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D6AD5D]">
                      Built with
                    </p>

                    <p className="mt-2 text-xs text-[#D7D0C4]">
                      {project.technologies}
                    </p>
                  </div>
                </div>

                <div className="project-frame border-[#443D37] bg-[#0F0E0D]">
                  <div className="flex items-center justify-between border-b border-[#443D37] px-4 py-3">
                    <span className="text-xs text-[#A9A29A]">
                      {screenshot.title}
                    </span>

                    <span className="flex items-center gap-2 text-xs text-[#847D76]">
                      <Maximize2 className="h-3.5 w-3.5" />
                      {activeScreenshot + 1} / {project.screenshots.length}
                    </span>
                  </div>

                  <div className="flex min-h-[280px] items-center justify-center p-4 md:min-h-[480px] md:p-7">
                    <img
                      src={screenshot.image}
                      alt={`${project.title} - ${screenshot.title}`}
                      className="max-h-[600px] w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-[#443D37] px-4 py-4">
                    <button
                      type="button"
                      onClick={previousScreenshot}
                      aria-label="Previous screenshot"
                      className="flex items-center gap-2 border border-[#443D37] px-3 py-2 text-xs text-[#D7D0C4]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous
                    </button>

                    <span className="text-xs text-[#D6AD5D]">
                      {String(activeScreenshot + 1).padStart(2, '0')}
                    </span>

                    <button
                      type="button"
                      onClick={nextScreenshot}
                      aria-label="Next screenshot"
                      className="flex items-center gap-2 border border-[#443D37] px-3 py-2 text-xs text-[#D7D0C4]"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="screenshot-navigation mt-5">
                  {project.screenshots.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveScreenshot(index)}
                      aria-selected={index === activeScreenshot}
                    >
                      {String(index + 1).padStart(2, '0')} · {item.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

