export const loadState = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : []
}

export const saveState = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}