import { getPercentageInViewport } from '../src'

describe('getPercentageInViewport', () => {
  test('whole element in viewport ', () => {
    const element = {
      offsetTop: 0,
      offsetHeight: 100,
    }
    const viewport = {
      scrollTop: 0,
      offsetHeight: 100,
    }
    expect(getPercentageInViewport(element, viewport)).toBe(1)
  })

  test('partial element in viewport ', () => {
    const element = {
      offsetTop: 0,
      offsetHeight: 100,
    }
    const viewport = {
      scrollTop: 50,
      offsetHeight: 100,
    }
    expect(getPercentageInViewport(element, viewport)).toBe(0.5)
  })

  test('element above viewport ', () => {
    const element = {
      offsetTop: 0,
      offsetHeight: 100,
    }
    const viewport = {
      scrollTop: 100,
      offsetHeight: 100,
    }
    expect(getPercentageInViewport(element, viewport)).toBe(0)
  })

  test('element bellow viewport ', () => {
    const element = {
      offsetTop: 100,
      offsetHeight: 100,
    }
    const viewport = {
      scrollTop: 0,
      offsetHeight: 100,
    }
    expect(getPercentageInViewport(element, viewport)).toBe(0)
  })

  test('element very much above viewport ', () => {
    const element = {
      offsetTop: 0,
      offsetHeight: 100,
    }
    const viewport = {
      scrollTop: 200,
      offsetHeight: 100,
    }
    expect(getPercentageInViewport(element, viewport)).toBe(0)
  })

  test('element very much bellow viewport ', () => {
    const element = {
      offsetTop: 200,
      offsetHeight: 100,
    }
    const viewport = {
      scrollTop: 0,
      offsetHeight: 100,
    }
    expect(getPercentageInViewport(element, viewport)).toBe(0)
  })
})
