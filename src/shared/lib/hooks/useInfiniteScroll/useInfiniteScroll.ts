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
    let wrapperEl = wrapperRef.current
    let triggerEl = triggerRef.current

    let observe: IntersectionObserver | null = null
    if (callback) {
      const options = {
        root: wrapperEl,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observe = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      }, options)
      observe.observe(triggerEl)

      return () => {
        if (observe) {
          observe.unobserve(triggerEl)
        }
      }
    }
  }, [callback, triggerRef, wrapperRef])
}
