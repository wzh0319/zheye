<template>
  <ul class="row">
    <li v-for="column in ColumnList" :key="column.id" class="col my-3">
      <div class="card h-100  shadow-sm "  style="width: 18rem">
        <div class="card-body">
          <img :src="column.avatar" class="rounded-circle border  border-light w-25 my-3" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text">{{column.description}}</p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'app',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      require: true
    }
  },
  setup (props) {
    // 如果图片没有地址即需要操作props数据
    const ColumnList = computed(() => {
      return props.list?.map(column => {
        if (!column.avatar) {
          column.avatar = require('../assets/logo.png')
          // console.log(column.avatar)
        }
        return column
      })
    })
    return { ColumnList }
  }
})
</script>
<style lang="scss" scoped></style>
