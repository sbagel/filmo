import UserDashHeader from './components/UserDashHeader'
import UserFeed from './components/feed/UserFeed'

function UserDash({user}) {
  return (
    <div className="flex flex-col flex-grow">
      <UserDashHeader user={user}/>
      <UserFeed/>
    </div>
  )
}

export default UserDash
