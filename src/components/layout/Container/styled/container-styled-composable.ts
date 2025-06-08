import { computed } from 'vue'
import { provideContainerContext } from '../useContainerContext'

export function useContainerProvider(props: {
  maxWidth?: string
  gutter?: number
  customClass?: string
}) {
  provideContainerContext({
    maxWidth: props.maxWidth ?? '1200px',
    gutter: props.gutter ?? 16,
  })

  const baseClass = 'mx-auto w-full'
  const combinedClass = computed(() =>
    [baseClass, props.customClass].filter(Boolean).join(' ')
  )

  return {
    combinedClass,
  }
}
