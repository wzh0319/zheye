<template>
  <ul class="row">
    <li v-for="column in list" :key='column.id' class="col">
      <img :src="column.avatar" :alt="column.title">
      <h5>{{column.title}}</h5>
      <p>{{column.description}}</p>
      <a href="#">进入专栏</a>
    </li>
  </ul>
</template>
<script lang='ts'>
import { ref, defineComponent, PropType } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
export interface ColumnProps{
  id: number;
  title: string;
  avatar: string;
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
  setup () {
    const a = ref(1)
    console.log(a)
  }
})
</script>
<style lang="scss" scoped>

</style>
