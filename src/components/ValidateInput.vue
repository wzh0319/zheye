<template>
  <div class="validate-input-container pb-3">
    <input type="text"  class="form-control" v-model="inputreactive.value"
      @blur="validateinput"
    :class="{'is-invalid':inputreactive.error}"
    >
    <span v-if="validateinput.error" class="invalid-feedback"></span>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
export interface RuleProp {
  type:'require' | 'email' ;
  message: string
}
export type RulesProp = RuleProp[]
export default defineComponent({
  props: {
    rules: Array as PropType<RulesProp>
  },
  setup (props) {
    const inputreactive = reactive({
      value: '',
      error: false,
      message: ''
    })
    const email = /^[A-Za-zd0-9]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/
    const validateinput = () => {
      if (props.rules) {
        const allpassed = props.rules.every(rule => {
          let passed = true
          inputreactive.message = rule.message
          switch (rule.type) {
            case 'require' :
              passed = inputreactive.value.trim() !== ''
              break
            case 'email' :
              passed = email.test(inputreactive.value)
              break
            default:break
          }
          return passed
        })
        inputreactive.error = !allpassed
      }
    }
    return { inputreactive, validateinput }
  }
})
</script>
<style lang="scss" scoped>

</style>
