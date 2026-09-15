import { useState } from 'react'
import { ArrowLeft, ArrowRight, Maximize2 } from 'lucide-react'

const projects = [
  {
    id: 'marketplace',
    number: '01',
    title: 'Smart Marketplace for Local Businesses',
    category: 'WEB APPLICATION',
    shortDescription:
      'A local marketplace platform connecting customers with businesses, products, services, and delivery operations.',
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
    shortDescription:
      'An AI-powered learning platform designed to help students revise effectively, plan their studies, and access personalized learning resources.',
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
  const [showDetails, setShowDetails] = useState(false)

  const project = projects[activeProject]
  const screenshot = project.screenshots[activeScreenshot]

  const changeProject = (index) => {
    setActiveProject(index)
    setActiveScreenshot(0)
    setShowDetails(false)
  }

  const viewProjectDetails = () => {
    setActiveScreenshot(0)
    setShowDetails(true)
  }

  const closeProjectDetails = () => {
    setShowDetails(false)
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
      id="work"
      className="bg-[#181614] py-16 text-[#F4EFE5] md:py-24"
    >
      <div className="portfolio-shell">
        <div className="section-frame border-[#443D37]">
          <div className="px-5 py-10 md:px-10 md:py-12 lg:px-14">
            <div className="section-number text-[#D6AD5D]">
              07 / Selected Work
            </div>

            {!showDetails ? (
              <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
                <div>
                  <p className="technical-label mb-4 text-[#D96B48]">
                    Projects
                  </p>

                  <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                    Ideas turned into
                    <span className="block text-[#D96B48]">
                      working experiences.
                    </span>
                  </h2>

                  <div className="mt-7 border-t border-[#443D37]">
                    {projects.map((item, index) => {
                      const isActive = index === activeProject

                      return (
                        <div
                          key={item.id}
                          className={`border-b border-[#443D37] py-4 ${
                            isActive
                              ? 'text-[#F4EFE5]'
                              : 'text-[#847D76]'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => changeProject(index)}
                            className="flex w-full items-center gap-4 text-left"
                          >
                            <span className="w-8 text-xs font-bold tracking-widest text-[#D6AD5D]">
                              {item.number}
                            </span>

                            <span className="text-sm font-semibold md:text-base">
                              {item.title}
                            </span>
                          </button>

                          {isActive && (
                            <div className="mt-3 pl-12">
                              <p className="max-w-lg text-sm leading-6 text-[#A9A29A]">
                                {item.shortDescription}
                              </p>

                              <button
                                type="button"
                                onClick={viewProjectDetails}
                                className="mt-3 inline-flex items-center gap-2 border border-[#D96B48] px-4 py-2 text-xs font-semibold text-[#D96B48] transition-all duration-200 hover:bg-[#D96B48] hover:text-white"
                              >
                                View Details
                                <ArrowRight className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-full border border-[#443D37] bg-[#0F0E0D] p-4 md:p-6">
                    <div className="mb-4">
                      <p className="text-xs font-bold tracking-[0.2em] text-[#D6AD5D]">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold md:text-4xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex min-h-[240px] items-center justify-center overflow-hidden md:min-h-[390px]">
                      <img
                        src={project.screenshots[0].image}
                        alt={`${project.title} preview`}
                        className="max-h-[500px] w-full object-contain"
                      />
                    </div>

                    <div className="mt-4 border-t border-[#443D37] pt-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D6AD5D]">
                        Built with
                      </p>

                      <p className="mt-1 text-xs text-[#A9A29A]">
                        {project.technologies}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <button
                      type="button"
                      onClick={closeProjectDetails}
                      className="mb-4 inline-flex items-center gap-2 text-xs font-semibold text-[#A9A29A] transition-colors hover:text-[#F4EFE5]"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back to Projects
                    </button>

                    <p className="text-xs font-bold tracking-[0.2em] text-[#D6AD5D]">
                      {project.category}
                    </p>

                    <h2 className="mt-2 max-w-3xl text-3xl font-semibold md:text-5xl">
                      {project.title}
                    </h2>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-[#A9A29A] md:text-base">
                      {project.shortDescription}
                    </p>

                    <p className="mt-3 text-xs text-[#D7D0C4]">
                      <span className="font-semibold text-[#D6AD5D]">
                        Built with:
                      </span>{' '}
                      {project.technologies}
                    </p>
                  </div>

                  <span className="border border-[#443D37] px-3 py-2 text-xs text-[#A9A29A]">
                    {project.number}
                  </span>
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

                  <div className="flex min-h-[260px] items-center justify-center p-4 md:min-h-[450px] md:p-6">
                    <img
                      src={screenshot.image}
                      alt={`${project.title} - ${screenshot.title}`}
                      className="max-h-[580px] w-full object-contain"
                    />
                  </div>

                  <div className="flex items-center justify-between border-t border-[#443D37] px-4 py-3">
                    <button
                      type="button"
                      onClick={previousScreenshot}
                      aria-label="Previous screenshot"
                      className="flex items-center gap-2 border border-[#443D37] px-3 py-2 text-xs text-[#D7D0C4] transition-colors hover:border-[#D6AD5D] hover:text-[#F4EFE5]"
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
                      className="flex items-center gap-2 border border-[#443D37] px-3 py-2 text-xs text-[#D7D0C4] transition-colors hover:border-[#D6AD5D] hover:text-[#F4EFE5]"
                    >
                      Next
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="screenshot-navigation mt-4">
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
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection

