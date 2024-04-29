import { forEach } from 'lodash'

/**
 * Acces localstorage and return the value of the key.
 * If you van to access nested key, you can use dot notation. `status.balance`
 * @param {string} key simple or nested key to find
 * @returns null or the value of the key
 */
export const readFromLocalStorage = (key) => {
  const keyMap = key.split('.')
  let current = JSON.parse(localStorage.getItem(keyMap[0]))
  forEach(keyMap.slice(1), (key, index) => {
    if (index === keyMap.length - 2) {
      current = current[key]
    }
    if (!current || !current[key]) {
      return null
    }
    current = current[key]
  })
  return current
}

export const saveToLocalStorage = (key, value) => {
  const keyMap = key.split('.')
  const parsedData = JSON.parse(localStorage.getItem(keyMap[0]))
  let current = parsedData || {}
  forEach(keyMap.slice(1), (key, index) => {
    if (!current || !current[key]) {
      current[key] = {}
    }
    if (index === keyMap.length - 2) {
      current[key] = value
    }
    current = current[key]
  })
  localStorage.setItem(keyMap[0], JSON.stringify(parsedData))
  return current || null
}
