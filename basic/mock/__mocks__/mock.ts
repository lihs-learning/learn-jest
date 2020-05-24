// lihs: 这里只是演示用的 Promise<object>
export function fetchData(): Promise<object> {
  return Promise.resolve({
    status: 200,
    data: 'success',
  })
}
