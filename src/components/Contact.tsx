/** 联系方式：邮箱、GitHub 与社交媒体链接（占位地址请替换为真实链接） */
const links = [
  { label: '邮箱', href: 'mailto:hello@example.com' },
  { label: 'GitHub', href: 'https://github.com/' },
  { label: '社交媒体', href: 'https://example.com/' },
]

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-line py-20">
      <h2 className="text-2xl font-semibold md:text-3xl">联系方式</h2>
      <p className="mt-6 text-muted">欢迎通过以下方式联系我。</p>
      <ul className="mt-8 flex flex-wrap gap-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="inline-block rounded-full border border-line px-5 py-2 text-sm transition-colors hover:border-accent-from"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Contact
