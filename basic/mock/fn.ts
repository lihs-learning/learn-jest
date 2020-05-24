export function runCallback(fn: () => void): void {
  fn()
}

export function runCallbackTimes(fn: () => void, times: number): void {
  for (let c=0; c < times; c++) {
    fn()
  }
}

export function runCallbackWith(fn: (desc: string, count: number) => void, desc: string, count: number): void {
  fn(desc, count)
}
