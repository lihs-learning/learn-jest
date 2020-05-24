export interface IFakeOKRes {
  status: number,
  statusText: string,
  data: object,
}

export enum TOKEN {
  OK,
  ERR,
}

function fakeAxios(duration: number, isError: boolean): Promise<IFakeOKRes> {
  return new Promise<IFakeOKRes>((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(new Error('Error: Request failed with status code 401'))
        return
      }
      resolve({
        status: 200,
        statusText: 'OK',
        data: {
          success: 'ok',
        },
      })
    }, duration)
  })
}


const WAIT_DURATION = 300

export function asyncCallback(token: TOKEN, fn): void {
  fakeAxios(WAIT_DURATION, token === TOKEN.ERR)
    .then(res => fn(res.data))
}

export function asyncPromise(token: TOKEN): Promise<IFakeOKRes> {
  return fakeAxios(WAIT_DURATION, token === TOKEN.ERR)
}
