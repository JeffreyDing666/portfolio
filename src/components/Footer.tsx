/** 版权年份在模块初始化时计算，避免在渲染期间调用非纯函数 */
const currentYear = new Date().getFullYear()

/** 页脚：版权信息 */
function Footer() {
  return (
    <footer className="border-t border-line py-8 text-center text-sm text-muted">
      <p>© {currentYear} 你的名字. All rights reserved.</p>
    </footer>
  )
}

export default Footer
