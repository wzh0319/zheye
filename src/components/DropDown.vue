<template>
  <div class="dropdown" ref="dropdownRef">
    <button
      class="btn btn-secondary dropdown-toggle"
      type="button"
      id="dropdownMenuButton2"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="toggoleDropDown"
    >
      {{ data.name }}
    </button>
    <div v-if="data.isshow" class="wapper">
      <div class="item" v-for="(item, index) in data.list" :key="item + index">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref,
  watch
} from 'vue'
import useClickoutsilde from '../hooks/useClickoutside'
export interface DropDownProps {
  name: string;
  list: Array<string>;
}
export default defineComponent({
  name: 'DropDown',
  prop: {
    dropdata: Object as PropType<DropDownProps>,
    require: true
  },
  setup () {
    const data = reactive({
      name: 'admin',
      list: ['新建文章', '编辑资料', '退出登录'],
      isshow: false
    })
    const toggoleDropDown = () => {
      data.isshow = !data.isshow
    }
    const dropdownRef = ref(null)
    const isClickoutsilde = useClickoutsilde(dropdownRef)
    watch(isClickoutsilde, () => {
      if (isClickoutsilde.value && data.isshow) {
        data.isshow = false
      }
    })
    return { data, toggoleDropDown, dropdownRef }
  }
})
</script>
<style lang="scss" scoped>
.wapper {
  position: absolute;
  background: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0.3rem;
  .item {
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    color: #fff;
  }
}
</style>
