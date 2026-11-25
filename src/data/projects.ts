import dashboardScreenshot from '../assets/projects/dashboard.svg'
import notesScreenshot from '../assets/projects/notes.svg'
import storefrontScreenshot from '../assets/projects/storefront.svg'

/** 项目数据结构，后续只需在此数组中添加项目即可更新作品列表 */
export interface Project {
  id: string
  name: string
  /** 项目截图地址，建议放入 public/ 或 src/assets/ */
  image: string
  description: string
  techStack: string[]
  link: string
}

/**
 * 示例项目数据：截图为本地 SVG 占位图，链接为通用地址。
 * 接入真实内容时按 Project 类型替换即可，组件无需改动。
 */
export const projects: Project[] = [
  {
    id: 'dashboard',
    name: '数据可视化看板',
    image: dashboardScreenshot,
    description: '面向运营团队的数据看板，支持核心指标概览、趋势图表与深色主题切换。',
    techStack: ['React', 'TypeScript', 'Recharts', 'Tailwind CSS'],
    link: 'https://github.com/',
  },
  {
    id: 'storefront',
    name: '轻量电商前台',
    image: storefrontScreenshot,
    description: '响应式商品浏览体验，包含分类筛选、关键词搜索与购物车结算流程。',
    techStack: ['React', 'Vite', 'Zustand', 'Tailwind CSS'],
    link: 'https://github.com/',
  },
  {
    id: 'notes',
    name: '云端笔记应用',
    image: notesScreenshot,
    description: '支持 Markdown 编辑、草稿自动保存与全文搜索的写作工具，数据留存在本地。',
    techStack: ['React', 'Node.js', 'IndexedDB', 'Markdown'],
    link: 'https://github.com/',
  },
]
