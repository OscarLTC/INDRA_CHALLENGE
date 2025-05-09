const apiUrl = import.meta.env.VITE_API_URL

export async function fetchUser() {
  const res = await fetch(`${apiUrl}/user.json`)
  const data = await res.json()
  return data
}
