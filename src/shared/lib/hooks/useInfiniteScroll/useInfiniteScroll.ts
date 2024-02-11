import { MutableRefObject, useEffect, useRef } from 'react'

export interface useInfiniteScrollProps {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfiniteScroll = ({
  callback,
  triggerRef,
  wrapperRef,
}: useInfiniteScrollProps) => {
  useEffect(() => {
    let observe: IntersectionObserver | null = null
    if (callback) {
      const options = {
        root: wrapperRef.current,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observe = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)
      observe.observe(triggerRef.current)

      return () => {
        if (observe) {
          observe.unobserve(triggerRef.current)
        }
      }
    }
  }, [triggerRef, wrapperRef])
}
