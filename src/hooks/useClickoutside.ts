import { ref, onUnmounted, onMounted, Ref } from 'vue'
const useClickoutside = (elementRef:Ref<null|HTMLElement> ) => {
  const isClickoutsilde = ref(false)
  const handler = (e:MouseEvent) => {
    if (elementRef.value) {
      if (elementRef.value.contains(e.target as HTMLElement)) {
        isClickoutsilde.value = false
      } else {
        isClickoutsilde.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  return isClickoutsilde
}
export default useClickoutside