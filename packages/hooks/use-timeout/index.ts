import { useTimeoutFn } from '@vueuse/core'

export const useTimeout = () => {
  let stop: (() => void) | undefined = undefined

  const registerTimeout = (fn: (...args: any[]) => unknown, delay: number) => {
    cancelTimeout()
    ;({ stop } = useTimeoutFn(fn, delay))
  }
  const cancelTimeout = () => stop?.()

  return {
    registerTimeout,
    cancelTimeout,
  }
}
