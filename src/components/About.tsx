import { skills } from '../data/skills'

/** 关于我：详细介绍 + 技能列表（数据来自 data/skills.ts） */
function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-line py-20">
      <h2 className="text-2xl font-semibold md:text-3xl">关于我</h2>
      <p className="mt-6 max-w-3xl leading-relaxed text-muted">
        在这里补充更详细的个人介绍：经历、擅长领域与正在关注的方向。
      </p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={`${skill.category}-${skill.name}`}
            className="rounded-full border border-line bg-surface px-4 py-2 text-sm"
          >
            <span className="text-muted">{skill.category} · </span>
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
