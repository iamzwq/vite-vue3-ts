<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import userApi from '@/api/user';
import useSessionStore from "@/stores/session"

const router = useRouter()
const route = useRoute()

const sessionStore = useSessionStore()

const ruleFormRef = ref<FormInstance>()

const loginForm = reactive({
  username: '',
  password: ''
})

const validateUsername = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    callback()
  }
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules>({
  username: [{ validator: validateUsername, trigger: 'blur' }],
  password: [{ validator: validatePassword, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')

      userApi.login(loginForm).then(res => {
        sessionStore.$patch({
          name: loginForm.username,
          email: 'aaa@bbb.com',
          token: 'ccccccc'
        })

        const redirect = route.query.redirect as string
        const path = redirect ? decodeURIComponent(redirect) : '/'
        router.push(path)
      }).finally(() => {
        sessionStore.$patch({
          name: loginForm.username,
          email: 'aaa@bbb.com',
          token: 'ccccccc'
        })
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>

<template>
  <div class="login-form">
    <el-form ref="ruleFormRef" :model="loginForm" status-icon :rules="rules" label-width="80px">
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Password" prop="password">
        <el-input v-model="loginForm.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          Submit
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login-form {
  margin: 100px auto;
  padding: 40px;
  width: 400px;
  border: 1px solid #ccc;
  box-shadow: 1px 5px 5px 5px #ccc;
}
</style>
