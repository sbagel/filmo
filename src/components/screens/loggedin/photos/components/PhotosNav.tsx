
import { RiCameraLensFill } from 'react-icons/ri';

function PhotosNav({user}) {

  return (
    <nav className='fixed w-full top-0 pt-[.2rem] z-10 text-milk bg-black/[0.85] h-[4rem]'>
      <div className='flex'>
      <Logo size="text-[1.5rem] mr-[2rem] p-[1rem] mt-[-.5rem]" extra="text-[1.2rem] mt-[.7rem]"/>
      <div className='justify-end items-center flex flex-grow pr-[3rem]'>
        {/* get pro */}
        <div className="mr-3 font-semibold text-sm"><a href="/pro">Get Pro</a></div>
        {/* upload button */}
        <a href="/photos"><button type="button" className="bg-cornflower rounded-full w-[5.5rem] h-[2.5rem] text-sm font-bold">Upload</button></a>
        {/* divider */}
        <VertDivider/>
        {/* avatar  */}
        <div className="avatar">
          <a href='/username'><div className="w-10 h-10 rounded"><img className="object-cover rounded" src={user.avatar}/></div></a>
        </div>
      </div>

      </div>
    </nav>
  )
}

function VertDivider(){
  return (
    <div className="border-l-[1.5px] border-placeholder/[.4] px-2 ml-5 mr-2 h-[25px]"><div className="invisible">h</div></div>
  )
}

function Logo({size, extra}){

  return (
    <div className="flex relative items-center w-fit">
      <span className={`font-bold ${size}`}><a href="/">film<span className={`text-cornflower absolute ml-[-.1rem] ${extra}`}><RiCameraLensFill/></span></a></span>
    </div>
    )
}

export default PhotosNav
