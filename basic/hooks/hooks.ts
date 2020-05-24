export default class Counter {
  public val: number

  constructor() {
    this.val = 0
  }

  addOne(): void {
    this.val += 1
  }

  minusOne(): void {
    this.val -= 1
  }
}
