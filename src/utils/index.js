import { ElMessage } from 'element-plus'

const Layer = {
  comingSoon: () =>
    ElMessage({
      message: '该功能正在开发中，敬请期待 0.0',
      type: 'warning',
      plain: true
    })
}

export default Layer
