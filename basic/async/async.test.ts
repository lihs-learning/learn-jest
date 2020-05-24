import {asyncCallback, asyncPromise, TOKEN,} from './async'

const IS_VERBOSE = false

describe('异步调用', () => {
  test('回调式 done', done => {
    asyncCallback(TOKEN.OK, result => {
      expect(result).toEqual({
        success: 'ok',
      })
      done()
    })
  })
  // bad case
  // test('错误也会通过测试', () => {
  //   asyncCallback(TOKEN.ERR, result => {
  //     expect(result).toEqual({
  //       success: 'ok',
  //     })
  //   })
  // })

  // lihs: Promise 推荐写法
  test('Promise resolves mather', () => {
    return expect(asyncPromise(TOKEN.OK)).resolves.toMatchObject({
      data: {
        success: 'ok',
      },
    })
  })

  test('Promise reject mather', () => {
    return expect(asyncPromise(TOKEN.ERR)).rejects.toThrow(/401/)
  })


  if (!IS_VERBOSE) {
    return
  }

  // lihs: 下面 Promise 的写法也可以正常工作
  //       但不推荐。仅供学习使用。
  test('Promise 正确流程', () => {
    return asyncPromise(TOKEN.OK)
      .then(result => {
        expect(result.data).toEqual({
          success: 'ok',
        })
      })
  })

  test('Promise 错误流程', () => {
    expect.assertions(1) // expect 必须执行一次
    return asyncPromise(TOKEN.ERR)
      .catch(e => {
        expect(e.toString()).toMatch('401')
      })
  })

  test('async await resolve 学习过渡', async () => {
    await expect(asyncPromise(TOKEN.OK)).resolves.toMatchObject({
      data: {
        success: 'ok',
      },
    })
  })

  test('async await resolve 学习过渡', async () => {
    await expect(asyncPromise(TOKEN.ERR)).rejects.toThrow(/401/)
  })

  // lihs: 其实下面这种 async await 也很舒服
  //       但是异常逻辑的写法感觉有点不太好
  test('async await resolve', async () => {
    const res = await asyncPromise(TOKEN.OK)
    expect(res.data).toEqual({
      success: 'ok',
    })
  })

  test('async await reject', async () => {
    expect.assertions(1) // expect 必须执行一次
    try {
      await asyncPromise(TOKEN.ERR)
    } catch (e) {
      // lihs: 正常情况 axios 的 Error 对象是有状态码的
      expect(e.toString()).toMatch(/401/)
    }
  })

  // lihs: 优化 Promise，借鉴 go 返回多个结果
  //       经查证，这个借鉴在2016年就有了
  //       How to write async await without try-catch blocks in Javascript
  //       https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/
  function awaitWrap<T>(promise: Promise<T>): Promise<[T | null, Error | null]> {
    return promise
      .then<[T, null]>((data: T) => [data, null])
      .catch<[null, Error]>(err => [null, err])
  }

  test('async awaitWrap resolve', async () => {
    const [res] = await awaitWrap(asyncPromise(TOKEN.OK))
    expect(res.data).toEqual({
      success: 'ok',
    })
  })

  test('async awaitWrap reject', async () => {
    const [, err] = await awaitWrap(asyncPromise(TOKEN.ERR))
    expect(err.toString()).toMatch(/401/)
  })

})
