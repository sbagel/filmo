import User from './components/User'
import UserStats from './components/UserStats'
import SideIcons from '~/components/shared/SideIcons'
import Logo from '~/components/shared/Logo'
import axios from 'axios'
import { useState, useEffect } from 'react';

function SideBar({user}) {
  const [photosLen, setPhotosLen] = useState(null)

  useEffect(()=>{
    if (user) {
      axios.get(`/api/users/current/photos?username=${user.username}`)
        .then(res => setPhotosLen(res.data.length))
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen w-[29em] p-10 px-[3rem] bg-dash/[.4] text-milk leading-10 border-r-[1.25px] border-placeholder/[.1] drop-shadow-lg">
      <div className="sticky self-start	top-10 w-[100%]">
      <div className="font-bold text-4xl flex justify-center select-none pointer-events-none">
        <Logo size="text-[3rem]" extra="text-[2.2rem] mt-[.45rem]"/>
      </div>
      <div className="mb-4 flex justify-center"><User user={user}/></div>
      <div className="mb-5"><UserStats photosLen={photosLen}/></div>
        <div><SideIcons/></div>
      </div>
    </div>
  )
}

export default SideBar
