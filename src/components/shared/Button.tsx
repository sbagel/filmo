import { useNavigate } from 'react-router-dom';

function Button({url, height, width, color, text, textSize, mx, extra, icon, extra2}){
  const navigate = useNavigate();

  return (
    <div className={`b mx-${mx} h-${height} w-${width} flex justify-center items-center ${extra}`} onClick={e=> navigate(url)}>
      <div className={`i h-${height} w-${width} bg-${color} items-center rounded-full shadow-2xl cursor-pointer
      absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out`}>
      </div>
      <a className={`text-center font-bold text-${textSize} text-milk z-10 pointer-events-none ${extra2}`}>{icon}{text}</a>
    </div>  )
}

export default Button