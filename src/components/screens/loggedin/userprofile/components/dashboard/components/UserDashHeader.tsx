import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useContext } from 'react';
import { usePalette } from '@lauriys/react-palette';


function UserDashHeader() {

  return (
      <div className="relative w-[100%]">
        <div className={`bg-cover bg-rose-900 w-[100%] h-[25rem] relative z-10`}>
          <UserInfo/>
        </div>
        <div className={`w-[120%] absolute top-[18rem] left-[-5rem] h-[28rem] bg-gradient-to-b from-rose-900 to-black blur-[2rem] opacity-70`}></div>
      </div>
  )
}

function UserInfo(){
  const { user, setUser } = useContext(ProfileContext)

  return (
    user ?
    <div className="flex flex-col justify-center w-fit h-[10rem] absolute bottom-0 px-[2rem]">
    <div className="font-bold text-[3rem] uppercase">
      <span className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">{user.name}</span></div>
    <p>@{user.username}</p>
    <p className="text-milk/[0.75] text-[.7rem] mt-[.2rem]">120 photos | 20 collections</p>
    </div>
    : null
  )
}

export default UserDashHeader
