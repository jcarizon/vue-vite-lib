import { computed } from 'vue'
import { useContainerContext } from '../useContainerContext'

export function useContainer(props: {
  fluid?: boolean
  padding?: string
  tag?: string
  customClass?: string
}) {
  const { gutter, maxWidth } = useContainerContext()

  const tag = props.tag ?? 'div'

  const paddingValue = computed(() => props.padding ?? `px-${gutter / 4}`)

  const containerStyle = computed(() => ({
    maxWidth: props.fluid ? '100%' : maxWidth,
    paddingLeft: paddingValue.value,
    paddingRight: paddingValue.value,
  }))

  return {
    tag,
    containerStyle,
  }
}
