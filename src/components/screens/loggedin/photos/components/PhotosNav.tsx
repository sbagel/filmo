
import { useNavigate } from 'react-router-dom';
import Logo from '~/components/shared/Logo'

function PhotosNav({user}) {
  const navigate = useNavigate();

  return (
    <nav className='fixed w-full top-0 z-10 text-milk bg-black/[0.85] h-[3rem]'>
      <div className='mt-[-.5rem]'>
      {/* <Logo size="text-[1.25rem] mr-[2rem] p-[1rem]" extra="text-[1rem] mt-[.55rem]"/> */}
      </div>
    </nav>
  )
}

function VertDivider(){
  return (
    <div className="border-l-[1.5px] border-placeholder/[.4] px-2 ml-5 mr-2 h-[25px]"><div className="invisible">h</div></div>
  )
}

export default PhotosNav
