import SideIcons from '~/components/shared/SideIcons'
import Logo from '~/components/shared/Logo'

function SideBar() {
  return (
    <div className="sticky self-start	top-0 z-10 ">
      <div className="flex flex-col min-h-screen w-[15em] p-[3rem] bg-black text-milk leading-10 border-r-[1.25px] border-placeholder/[.1] drop-shadow-lg z-10">
        <Logo size="text-[2rem] pointer-events-none" extra="text-[1.6rem] mt-[.65rem]"/>
        <SideIcons/>
      </div>
    </div>
  )
}

export default SideBar
