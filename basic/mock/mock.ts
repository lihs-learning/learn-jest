import axios from 'axios'

// lihs: 这里只是演示用的 Promise<object>
export function fetchData(): Promise<object> {
  return axios.get('/path/to/api/success')
}

export function getNumber(): number {
  return 4
}
