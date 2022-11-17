import DashHeader from './components/DashHeader'
import Feed from './components/feed/Feed'

function Dashboard() {
  return (
  <div className="min-h-screen w-screen flex flex-col pt-10">
      <DashHeader/>
      <Feed/>
    </div>
  )
}

export default Dashboard
