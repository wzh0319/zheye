<template lang="zn">
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">者也专栏</a>
  <!-- Navbar content -->
  <span v-if="user.isLogin">
    <drop-down :data="dropdata"></drop-down>
  </span>
  <span v-else>
    <button type="button" class="btn btn-outline-primary ">登录</button>
    <button type="button" class="btn btn-outline-primary">注册</button>
  </span>
</nav>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropDown from './DropDown.vue'
export interface UserProps {
  isLogin:boolean;
  name?:string;
  id?:number
}
export default defineComponent({
  name: 'olbalHeader',
  props: {
    user: {
      type: Object as PropType <UserProps>,
      require: true
    }
  },
  setup (props) {
    const dropdata = {
      name: props.user?.name,
      list: ['新建文章', '修改文章']
    }
    return { dropdata }
  },
  components: {
    DropDown
  }
})
</script>

<style lang="scss">

</style>
