
<template>
  <div class="login-logo">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember"
          >Remember me</a-checkbox
        >
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit" @click="submitForm"
          >登录</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { message } from 'ant-design-vue';
import {login} from "@/request/api";
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
export default defineComponent({
  setup() {
    const formState = reactive<FormState>({
      username: '',
      password: '',
      remember: true,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    const name = 'jack'
    const word = 'redballoon'
    const submitForm = () => {
    login(formState).then(res=>{
        console.log(res)
      })

    if(formState.username!= name || formState.password!= word ){
      message.warn('登录失败')
      return;
      }
    if(formState.username == name && formState.password == word){
      message.success('登录成功')
      
      return;
    }

  }

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      submitForm
    };
  },
});
</script>

<style>
.login-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  min-height: 700px;
  min-width: 1100px;
  background-color: #e6f5ff;
  background-image: url("../components/icons/background.png");
  background-position: left top, left bottom, right top, right bottom;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
}
</style>
