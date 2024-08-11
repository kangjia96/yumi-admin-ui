<script setup>
defineOptions({ name: 'Ball' })

const props = defineProps({
  type: { type: String, default: 'success' },
  size: { type: String, default: 'normal' },

  text: { type: String, default: '' }
})

const width = computed(() => {
  return {
    small: '.8em',
    normal: '1em',
    large: '1.2em'
  }[props.size]
})
const bgColor = computed(() => {
  return {
    primary: 'var(--el-color-primary)',
    success: 'var(--el-color-success)',
    warning: 'var(--el-color-warning)',
    danger: 'var(--el-color-danger)',
    info: 'var(--el-color-info)'
  }[props.type]
})
</script>

<template>
  <div class="ball-container">
    <div class="ball size" />
    <div v-if="props.text">{{ text }}</div>
  </div>
</template>

<style scoped lang="scss">
.ball-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
}

.ball {
  border-radius: 50%;
  background-color: v-bind(bgColor);
}

.size {
  width: v-bind(width);
  height: v-bind(width);
}
</style>
