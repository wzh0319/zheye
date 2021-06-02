<template>
  <div>
    <div class="btn-group">
      <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {{ dropdata.name }}
      </button>
      <ul class="dropdown-menu" v-for="item in list" :key="item.name">
        {{ item }}
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface DropDownProps {
  name: string;
  list: Array<string>
}
export default defineComponent({
  name: 'DropDown',
  prop: {
    dropdata: Object as PropType<DropDownProps>,
    require: true
  },
  setup () {
    return {}
  }
})
</script>
<style lang="scss" scoped>

</style>
