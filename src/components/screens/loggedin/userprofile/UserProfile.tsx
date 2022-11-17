import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useContext } from 'react';
import { Head } from "~/components/shared/Head";
import UserSideBar from "./components/sidebar/UserSideBar";
import UserDash from "./components/dashboard/UserDash";

function UserProfile() {
  const { user, setUser } = useContext(ProfileContext)

  return (
    user ?
    <>
    <Head title={`@${user.username}`}></Head>
      <div className="min-h-screen flex bg-gradient-to-tr from-dash via-black to-dash scroll-smooth text-milk">
      <UserSideBar/>
      <UserDash/>
    </div>
    </>
    : null
  )
}

export default UserProfile
