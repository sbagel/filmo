import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useContext, useEffect } from 'react';
import { Head } from "~/components/shared/Head";
import SideBar from './components/sidebar/PhotosSideBar'
import PhotosNav from './components/PhotosNav';
import Loader from "~/components/shared/Loader";

function Photos() {
  const { user, setUser } = useContext(ProfileContext)

  return (
    user?
    <>
    <Head title="Photos"></Head>
    {/* nav bar */}
    <PhotosNav user={user}/>
    <div className="  min-h-screen flex bg-gradient-to-tr from-dash via-black to-dash scroll-smooth">
      <SideBar user={user}/>
    </div>
    </>
    :
    <Loader/>

  )
}

export default Photos
