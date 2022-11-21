import Button from '~/components/shared/Button'

function Page404() {
  return (
    <div className="h-[46rem] mt-28 py-20 text-milk font-bold animate-tracking-in-expand-fwd-bottom	">
        <p className="text-5xl text-center">A place for your best ideas</p>
        <div className="flex justify-center"><Button mx="auto" url="/signup" height="16" width="[15rem]" color="black" text="Start for free" textSize="xl" extra="mt-10"/></div>
    </div>
  )
}

export default Page404
