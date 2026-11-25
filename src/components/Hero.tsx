import avatar from '../assets/avatar.svg'

/**
 * 首页 Hero 组件：大标题 + 简介 + 头像。
 * 头像使用本地 SVG 占位图，接入真实照片时替换 assets/avatar.svg 即可。
 */
function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-24 items-center overflow-hidden py-20 md:py-28"
    >
      {/* 渐变光晕：纯装饰，不参与交互 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-accent-from/20 blur-3xl md:left-auto md:right-0 md:translate-x-0"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -z-10 bottom-0 left-0 h-64 w-64 rounded-full bg-accent-to/10 blur-3xl"
      />

      <div className="flex w-full flex-col items-center gap-14 md:flex-row md:justify-between md:gap-16">
        {/* 文案区域 */}
        <div className="max-w-2xl text-center md:text-left">
          <p className="animate-fade-up text-sm font-medium tracking-[0.2em] text-accent-to">
            PORTFOLIO · 2026
          </p>
          <h1 className="animate-fade-up [animation-delay:80ms] mt-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            你好，我是
            <span className="bg-linear-to-r from-accent-from via-accent-to to-accent-from bg-clip-text text-transparent">
              你的名字
            </span>
            <span className="block">用代码创造好体验</span>
          </h1>
          <p className="animate-fade-up [animation-delay:160ms] mt-6 max-w-xl leading-relaxed text-muted md:text-lg">
            我是一名前端开发者，专注于构建简洁、流畅且易用的 Web 产品。这里收录了我的技能与项目，欢迎了解。
          </p>
          <div className="animate-fade-up [animation-delay:240ms] mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="rounded-full bg-linear-to-r from-accent-from to-accent-to px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              查看我的项目
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent-from hover:text-foreground"
            >
              联系我
            </a>
          </div>
        </div>

        {/* 头像区域：渐变描边 + 光晕 */}
        <div className="animate-fade-up [animation-delay:320ms] relative shrink-0">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-linear-to-br from-accent-from/30 to-accent-to/30 blur-2xl"
          />
          <div className="relative rounded-full bg-linear-to-br from-accent-from to-accent-to p-1 shadow-[0_0_60px_-15px_var(--color-accent-from)]">
            <img
              src={avatar}
              alt="个人头像占位图，请替换为真实照片"
              loading="lazy"
              className="h-40 w-40 rounded-full object-cover md:h-56 md:w-56"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
