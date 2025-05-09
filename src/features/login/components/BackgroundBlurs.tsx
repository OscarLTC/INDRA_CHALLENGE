export const BackgroundBlurs = () => {
  return (
    <>
      <div className="hidden sm:block absolute -top-20 left-0 w-[400px] h-full bg-[url('/src/features/login/assets/blur-purple.png')] bg-cover -z-10" />
      <div className="block sm:hidden absolute -top-0 -left-10 w-[400px] h-full bg-[url('/src/features/login/assets/blur-purple-mobile.png')] bg-cover -z-10" />
      <div className="hidden sm:block absolute -top-20 right-0 w-[400px] h-full bg-[url('/src/features/login/assets/blur-cyan.png')] bg-cover -z-10" />
      <div className="block sm:hidden absolute -top-21 right-0 w-[600px] h-full bg-[url('/src/features/login/assets/blur-cyan-mobile.png')] bg-cover -z-10" />
    </>
  )
}
