import {
  getConfigWithoutTime,
  getConfigWithTime,
} from "./snapshot"

describe('快照', () => {
  test('getConfigWithoutTime', () => {
    expect(getConfigWithoutTime()).toMatchSnapshot()
  })

  test('getConfigWithTime', () => {
    expect(getConfigWithTime()).toMatchSnapshot({
      time: expect.any(Date),
    })
  })
})
