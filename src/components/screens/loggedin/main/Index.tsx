import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Head } from "~/components/shared/Head";
import SideBar from './components/sidebar/MainSideBar'
import Dashboard from './components/dashboard/Dashboard'
import Loader from "~/components/shared/Loader";

function LoggedInMain() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(ProfileContext)

  useEffect(() => {
    navigate('/')
  }, [user])

  return (
    user?
    <>
    <Head title="Dash"></Head>
    <div className="min-h-screen flex bg-gradient-to-tr from-dash via-black to-dash scroll-smooth">
      <SideBar user={user}/>
      <Dashboard user={user}/>
    </div>
    </>
    :
    <Loader/>

  )
}

export default LoggedInMain
