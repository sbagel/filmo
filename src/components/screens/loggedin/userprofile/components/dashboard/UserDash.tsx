import UserDashHeader from './components/UserDashHeader'
import UserFeed from './components/feed/UserFeed'

function UserDash({user, blur}) {
  return (
    <div className="flex flex-col flex-grow">
      <UserDashHeader user={user} blur={blur}/>
      <UserFeed/>
    </div>
  )
}

export default UserDash
