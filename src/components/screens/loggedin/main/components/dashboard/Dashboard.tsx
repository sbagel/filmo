import DashHeader from './components/DashHeader'
import Feed from './components/feed/Feed'

function Dashboard({user}) {
  return (
  <div className="min-h-screen w-screen flex flex-col pt-10">
      <DashHeader user={user}/>
      <Feed/>
    </div>
  )
}

export default Dashboard
