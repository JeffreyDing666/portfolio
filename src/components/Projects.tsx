import { projects } from '../data/projects'

/**
 * 项目展示组件：响应式卡片列表。
 * 每张卡片包含项目截图、标题、描述、技术栈标签与可点击的项目链接。
 * 数据来自 data/projects.ts，新增项目无需修改组件。
 */
function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-t border-line py-20 md:py-24">
      <div className="animate-fade-up">
        <p className="text-sm font-medium tracking-[0.2em] text-accent-to">SELECTED WORK</p>
        <h2 className="mt-3 text-2xl font-semibold md:text-3xl">项目展示</h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          以下是我参与过的一些项目，点击卡片可以查看更多信息。
        </p>
      </div>

      {projects.length === 0 ? (
        <p className="mt-8 text-muted">暂无项目，请在 src/data/projects.ts 中添加。</p>
      ) : (
        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="animate-fade-up"
              style={{ animationDelay: `${80 + index * 90}ms` }}
            >
              {/* 整张卡片可点击，target=_blank 在新标签页打开项目 */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`查看项目：${project.name}`}
                className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent-from/60 hover:shadow-[0_20px_50px_-30px_var(--color-accent-from)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} 项目截图`}
                    loading="lazy"
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-medium transition-colors group-hover:text-accent-to">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

                  {/* 技术栈标签 */}
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-line bg-background px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-6 inline-flex items-center gap-1 bg-linear-to-r from-accent-from to-accent-to bg-clip-text text-sm font-medium text-transparent">
                    查看项目 <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Projects
