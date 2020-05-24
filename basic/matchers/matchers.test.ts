describe('相同', () => {

  test('toBe', () => {
    // 相当于 object.is ===
    expect(10).toBe(10)
  })

  test('toBe', () => {
    // 不能用于不同的引用
    const foo = {
      one: 1,
    }
    expect(foo).not.toBe({
      one: 1,
    })
  })

  test('toEqual', () => {
    // 单纯地比较值
    const foo = {
      one: 1,
    }
    expect(foo).toEqual({
      one: 1,
    })
  })

  test('toBeNull', () => {
    // 只匹配 null。不能匹配 undefined
    const foo = null
    expect(foo).toBeNull()
  })

  test('toBeUndefined', () => {
    // 只匹配 undefined。不能匹配 null
    const foo = undefined
    expect(foo).toBeUndefined()
  })

  test('toBeDefined', () => {
    // lihs: 感觉相当于 .not.toBeUndefined
    let foo
    foo = 1
    expect(foo).toBeDefined()
    foo = {}
    expect(foo).toBeDefined()
    foo = null
    expect(foo).toBeDefined()
  })
})

describe('真假', () => {
  test('toBeTruthy', () => {
    // 包含隐式转换
    let foo
    foo = 1
    expect(foo).toBeTruthy()
    foo = {}
    expect(foo).toBeTruthy()
    foo = null
    expect(foo).not.toBeTruthy()
  })

  test('toBeFalsy', () => {
    // 包含隐式转换
    let foo
    foo = 0
    expect(foo).toBeFalsy()
    foo = undefined
    expect(foo).toBeFalsy()
    foo = {}
    expect(foo).not.toBeFalsy()
  })

})

describe('数字', () => {
  test('toBeGreaterThan', () => {
    const count = 10
    expect(count).toBeGreaterThan(9)
    // lihs@warning: 遇到浮点数一定要小心
    const foo = 0.1
    const bar = 0.2
    expect(foo + bar).toBeGreaterThan(0.3)
  })

  // 类似上面的不再展开
  // toBeLessThanOrEqual
  // toBeGreaterThanOrEqual
  // toBeLessThanOrEqual

  test('toBeCloseTo', () => {
    const foo = 0.1
    const bar = 0.2
    expect(foo + bar).toBeCloseTo(0.3)
    expect(foo + bar).not.toEqual(0.3)
  })
})

describe('字符串', () => {
  test('toMatch', () => {
    const str = 'https://lihs.me'
    expect(str).toMatch('lihs')
    expect(str).toMatch(/.+\.me/)
  })
})

describe('数组 集合', () => {
  test('toContain', () => {
    // Array
    const arr = ['lihs', 'xng', 'matrix']
    expect(arr).toContain('lihs')
    // lihs: 注意即使是字符串数组，这里也不能使用正则
    expect(arr).not.toContain(/n/)

    // Set
    const foo = new Set(arr)
    expect(foo).toContain('lihs')
  })
})

describe('异常', () => {
  function throwNewErrorFunc(): Error {
    throw new Error('foo')
  }
  test('toThrow', () => {
    // lihs: 注意这里没有执行函数，只是传递了函数进去
    //       会在下面 TS 里将如何使用类型约定
    expect(throwNewErrorFunc).toThrow()
    expect(throwNewErrorFunc).toThrow('foo')
    expect(throwNewErrorFunc).toThrow(/oo/)
    expect(throwNewErrorFunc).not.toThrow('bar')
  })
})

describe('TypeScript', () => {
  test('带类型的数组', () => {
    const arr: string[] = ['lihs', 'xng', 'matrix']
    expect<string[]>(arr).toContain<string>('lihs')
  })

  test('带类型的异常', () => {
    function throwNewErrorFunc(): Error {
      throw new Error('foo')
    }
    expect<Function>(throwNewErrorFunc).toThrow()
  })
})

// [完整列表](https://jestjs.io/docs/zh-Hans/expect)
