const apiUrl = import.meta.env.VITE_API_URL

export async function fetchPlans() {
  const res = await fetch(`${apiUrl}/plans.json`)
  const data = await res.json()
  return data.list
}
