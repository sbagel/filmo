import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useContext, useEffect, useState } from 'react';
import { Head } from "~/components/shared/Head";
import Loader from "~/components/shared/Loader";
import SideBar from './components/PhotosSideBar'
import PhotosNav from './components/PhotosNav';
import PhotosDashboard from './components/dashboard/PhotosDashboard';

function Photos() {
  const { user, setUser } = useContext(ProfileContext)
  const [category, setCategory] = useState('Upload')

  return (
    user?
    <>
    <Head title="Photos"></Head>
    {/* nav bar */}
    <PhotosNav user={user}/>
    <div className="  min-h-screen flex bg-gradient-to-tr from-dash via-black to-dash scroll-smooth">
      <SideBar user={user} category={category} setCategory={setCategory}/>
      <PhotosDashboard category={category}/>
    </div>
    </>
    :
    <Loader/>

  )
}

export default Photos
