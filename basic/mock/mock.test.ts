import { mocked } from 'ts-jest/utils'

import axios from 'axios'
jest.mock('axios')
const mockAxios = mocked(axios, true)

import { fetchData } from "./mock"
jest.mock('./mock')
const mockFetchData = mocked(fetchData)

const { getNumber } = jest.requireActual('./mock')

describe('mock', () => {
  test('mock axios.get', () => {
    mockAxios.get.mockResolvedValue({
      data: 'lihs',
    })
    expect(mockAxios.get('/api')).resolves.toEqual({
      data: 'lihs',
    })
  })

  test('mock fetchData', () => {
    return expect(mockFetchData()).resolves.toMatchObject({
      data: 'success',
    })
  })

  test('actual getNumber', () => {
    expect(getNumber()).toBe(4)
  })
})
