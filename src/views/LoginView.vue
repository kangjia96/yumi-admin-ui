<script setup>
import { reqLogin } from '@/api/auth.js'
import { useRouter } from 'vue-router'

const loginForm = ref({
  username: 'admin',
  password: 'admin123',
  remember: false,
  validCode: '1234'
})
const loginRules = {
  username: [
    { required: true, message: 'Please input your username', trigger: 'blur' },
    { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input your password', trigger: 'blur' },
    { min: 6, max: 20, message: 'Length should be 6 to 20', trigger: 'blur' }
  ]
}
const router = useRouter()
const loginFormRef = ref(null)
const onSubmit = () => {
  loginFormRef.value.validate(async (valid) => {
    if (valid) {
      const token = await reqLogin(loginForm.value)
      if (token) {
        await router.push('/')
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="login">
    <div class="login-box">
      <h1 style="margin-bottom: 20px">Yumi Admin</h1>
      <el-form size="large" ref="loginFormRef" :model="loginForm" :rules="loginRules">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="Username" clearable />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            placeholder="Password"
            clearable
            type="password"
            show-password
          />
        </el-form-item>
        <el-form-item prop="validCode">
          <div style="display: flex; justify-content: space-between; width: 100%">
            <el-input
              style="width: 40%"
              v-model="loginForm.validCode"
              placeholder="Valid Code"
              clearable
            />
            <el-input style="width: 50%" model-value="1234" disabled />
          </div>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.remember">Remember me</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 80%; margin: 0 auto" type="primary" @click="onSubmit"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 400px;
  height: 450px;
  background-color: var(--color-background-soft);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 20px 30px;
  text-align: center;
}
</style>
