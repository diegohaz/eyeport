// @flow

/**
 * Returns the visible percentage of an element in a viewport.
 * @example
 * const { getPercentageInViewport } = require('eyeport')
 *
 * const element = document.getElementById('myElement')
 * const viewport = document.getElementById('myContainer')
 *
 * getPercentageInViewport(element, viewport)
 */
export const getPercentageInViewport = (
  element: HTMLElement,
  viewport: HTMLElement,
): number => {
  const viewportHeight = viewport.offsetHeight
  const viewportScrollTop = viewport.scrollTop
  const elementTop = element.offsetTop
  const elementHeight = element.offsetHeight
  const hiddenBefore = viewportScrollTop - elementTop
  const hiddenAfter =
    elementTop + elementHeight - (viewportScrollTop + viewportHeight)

  if (
    viewportScrollTop > elementTop + elementHeight ||
    elementTop > viewportScrollTop + viewportHeight
  ) {
    return 0
  }

  let result = 1

  if (hiddenBefore > 0) {
    result -= hiddenBefore / elementHeight
  }

  if (hiddenAfter > 0) {
    result -= hiddenAfter / elementHeight
  }

  return result
}
