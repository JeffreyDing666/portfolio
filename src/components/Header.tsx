/** 顶部导航：锚点链接到各个板块，移动端可横向滚动 */
const navItems = [
  { label: '首页', href: '#home' },
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
      <nav
        aria-label="主导航"
        className="mx-auto flex max-w-5xl items-center justify-between gap-6 overflow-x-auto px-5 py-4"
      >
        <a
          href="#home"
          className="bg-linear-to-r from-accent-from to-accent-to bg-clip-text font-semibold text-transparent"
        >
          Portfolio
        </a>
        <ul className="flex gap-6 whitespace-nowrap text-sm text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a className="transition-colors hover:text-foreground" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
