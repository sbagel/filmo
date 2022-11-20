import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Head } from "~/components/shared/Head";
import axios from 'axios';
import UserSideBar from "./components/sidebar/UserSideBar";
import UserDash from "./components/dashboard/UserDash";
import Loader from "~/components/shared/Loader";

function UserProfile() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(ProfileContext)
  const [ blur, setBlur ] = useState(null)

  useEffect(() => {
    if(user){
      axios.get('https://api.sightengine.com/1.0/check.json', {
        params: {
          'url': user.header,
          'models': 'properties',
          'api_user': import.meta.env.VITE_API_USER,
          'api_secret': import.meta.env.VITE_API_SECRET,
        }
      })
      .then(res => setBlur(`${res.data.colors.dominant.hex}`))
      .then(() => navigate('/username'))
      .catch(e => console.log('error sightengine', e))
    }
   },[user])

  return (
    user && blur?
    <>
    <Head title={`@${user.username}`}></Head>
      <div className="min-h-screen flex bg-gradient-to-tr from-dash via-black to-dash scroll-smooth text-milk">
      <UserSideBar/>
      <UserDash user={user} blur={blur}/>
    </div>
    </>
    : <Loader/>
  )
}

export default UserProfile
