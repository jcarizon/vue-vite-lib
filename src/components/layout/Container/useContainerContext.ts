import { inject, provide, reactive } from 'vue'

export type ContainerContextType = {
  maxWidth: string
  gutter: number
  setMaxWidth: (value: string) => void
  setGutter: (value: number) => void
}

const ContainerContextSymbol = Symbol('ContainerContext')

export function provideContainerContext(initial = { maxWidth: '1200px', gutter: 16 }) {
  const state = reactive({
    maxWidth: initial.maxWidth,
    gutter: initial.gutter,
    setMaxWidth(value: string) {
      this.maxWidth = value
    },
    setGutter(value: number) {
      this.gutter = value
    }
  })

  provide(ContainerContextSymbol, state)
  return state
}

export function useContainerContext(): ContainerContextType {
  const context = inject<ContainerContextType>(ContainerContextSymbol)
  if (!context) {
    throw new Error('useContainerContext must be used within a ContainerProvider')
  }
  return context
}
