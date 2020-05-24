import Counter from './hooks'

describe('hooks demo', () => {
  let counter = null
  beforeAll(() => {
    // console.log('describe beforeAll')
  })
  afterAll(() => {
    // console.log('describe afterAll')
  })

  beforeEach(() => {
    counter = new Counter()
    // console.log('describe beforeEach')
  })
  afterEach(() => {
    // console.log('describe afterEach')
  })

  test('addOne', () => {
    counter.addOne()
    expect(counter.val).toBe(1)
  })

  test('minusOne', () => {
    counter.minusOne()
    expect(counter.val).toBe(-1)
  })
})
