export const computeUserAge = (dob: string): number => {
  const birth = new Date(dob.replace(/-/g, '/'))
  const now = new Date()
  let age = now.getFullYear() - birth.getFullYear()
  const m = now.getMonth() - birth.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--
  return age
}
