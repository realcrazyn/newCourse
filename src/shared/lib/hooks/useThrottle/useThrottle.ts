import { useCallback, useRef } from 'react'

export function useThrottle(callback: (...args: any[]) => void, delay: number) {
  const throllteRef = useRef(false)

  return useCallback(
    (...args: any[]) => {
      if (!throllteRef.current) {
        callback(...args)
        throllteRef.current = true

        setTimeout(() => {
          throllteRef.current = false
        }, delay)
      }
    },
    [callback, delay],
  )
}
