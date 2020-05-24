import { callLater, nestCallLater } from "./timer"

jest.useFakeTimers()

describe('timer', () => {
  test('runAllTimers', () => {
    const fn = jest.fn()
    callLater(fn)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalled()
  })

  test('runOnlyPendingTimers', () => {
    const fn = jest.fn()
    nestCallLater(fn)
    jest.runOnlyPendingTimers()
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test('advanceTimersByTime', () => {
    const fn = jest.fn()
    nestCallLater(fn)
    jest.advanceTimersByTime(3000)
    expect(fn).toHaveBeenCalledTimes(1)
    // lihs: 相对的时间
    jest.advanceTimersByTime(3000)
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
