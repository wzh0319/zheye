<template lang="zn">
  <div>
    <nav class="navbar navbar-dark bg-dark">
      <a class="navbar-brand" href="#">者也专栏</a>
  <!-- Navbar content -->
  <div v-if="user.isLogin">
  <DropDown></DropDown>
  </div>
  <div v-else>
    <button type="button" class="btn btn-outline-primary ">登录</button>
    <button type="button" class="btn btn-outline-primary">注册</button>
  </div>
</nav>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
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
    console.log(props.user?.name)
    const data = reactive({
      name: props.user?.name,
      list: ['新建文章', '编辑资料', '退出登录']
    })
    console.log(data)
    return { data }
  },
  components: {
    DropDown
  }
})
</script>

<style lang="scss">

</style>
