import { Head } from "~/components/shared/Head";
import SideBar from './components/sidebar/MainSideBar'
import Dashboard from './components/dashboard/Dashboard'

function LoggedInMain() {

  return (
    <>
      <Head title="Dash"></Head>
      <div className="min-h-screen flex bg-gradient-to-tr from-dash via-black to-dash scroll-smooth">
        <SideBar/>
        <Dashboard/>
      </div>
    </>
  )
}

export default LoggedInMain
