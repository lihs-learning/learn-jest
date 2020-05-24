import {
  runCallback,
  runCallbackTimes,
  runCallbackWith,
} from "./fn"

describe('回调的 Mock 函数', () => {
  test('runCallback', () => {
    const func = jest.fn<void, void[]>()
    runCallback(func)
    expect(func).toBeCalled()
  })

  test('runCallbackTimes', () => {
    const func = jest.fn<void, void[]>()
    runCallbackTimes(func, 3)
    expect(func).toBeCalledTimes(3)
  })

  test('runCallbackWith', () => {
    const calledArgs: [string, number] = ['lihs', 4]
    const func = jest.fn<string, [string, number]>()
    runCallbackWith(func, ...calledArgs)
    expect(func).toBeCalledWith(...calledArgs)
  })

  test('runCallbackReturn', () => {
    const returnValue = 'lihs'
    const func = jest.fn<string, [string]>()
    func.mockReturnValue(returnValue)
    expect(func(returnValue)).toBe(returnValue)
  })
})


