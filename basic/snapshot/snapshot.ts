interface IConfig {
  server: string,
  port: number,
  time?: Date,
}

export function getConfigWithoutTime(): IConfig {
  return {
    port: 0,
    server: "",
  }
}

export function getConfigWithTime(): IConfig {
  return {
    port: 0,
    server: "",
    time: new Date(),
  }
}
