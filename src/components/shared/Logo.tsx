import { RiCameraLensFill } from 'react-icons/ri';

function Logo({size, extra}){

  return (
    <div className="flex relative items-center">
      <span className={`font-bold mb-[5rem] ${size}`}><a href="/">film<span className={`text-cornflower absolute ml-[-.1rem] ${extra}`}><RiCameraLensFill/></span></a></span>
    </div>
    )
}

export default Logo