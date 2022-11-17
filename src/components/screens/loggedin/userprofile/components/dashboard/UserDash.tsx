import UserDashHeader from './components/UserDashHeader'
import UserFeed from './components/feed/UserFeed'

function UserDash() {
  return (
    <div className="flex flex-col flex-grow">
      <UserDashHeader/>
      <UserFeed/>
    </div>
  )
}

export default UserDash
