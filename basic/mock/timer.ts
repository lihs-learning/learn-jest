export function callLater(fn: Function): void {
  setTimeout(() => {
    fn()
  }, 3000)
}

export function nestCallLater(fn: Function): void {
  setTimeout(() => {
    fn()
    setTimeout(() => {
      fn()
    }, 3000)
  }, 3000)
}
