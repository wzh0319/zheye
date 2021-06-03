<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱</label>
      <ValidateInput :rules="emailRules" @message="getValidateinputmessage"/>
      <!-- <div class="form-text" >{{emailRules.message}}</div> -->
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1"  class="form-label">密码</label>
      <input type="password" class="form-control"  id="exampleInputPassword1">
      <div id="emailHelp" class="form-text" ></div>
    </div>
    <button type="submit" class="btn btn-primary">登录</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'

export default defineComponent({
  components: { ValidateInput },
  setup () {
    const emailRules: RulesProp = [
      { type: 'require', message: '邮箱不能为空！' },
      { type: 'email', message: '邮箱不合法' }
    ]
    const getValidateinputmessage = (val:string) =>{
      console.log(val);
    }
    return { emailRules, getValidateinputmessage }
  }
})
</script>
