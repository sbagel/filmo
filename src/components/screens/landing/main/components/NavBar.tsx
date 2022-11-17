import { FaSearch } from 'react-icons/fa';
import Logo from '~/components/shared/Logo'

function Page404() {
  return (
    <div className="flex w-screen h-16 backdrop-blur-3xl text-white shadow-lg px-10 pt-4 font-semibold">
      <div className="flex-none w-40 font-bold">
        <Logo size="text-[1.4rem]" extra="text-[1.1rem] mt-[.62rem]"/>
      </div>
      <div className="flex-auto w-20">
        <SearchBar/>
      </div>
      <div className="flex justify-end [&>*]:px-5 font-bold">
        <div><a href="/explore">Explore</a></div>
        <div><a href="/create">Create</a></div>
        <div><a href="/signin">Sign In</a></div>
        <div><a href="/signup">Sign up</a></div>
      </div>
    </div>
  )
}

function SearchBar(){
  return (
    <form className="flex">
      <div  className="text-sm text-placeholder pt-1.5" ><FaSearch/></div>
      <input placeholder={"Find photos, people, or groups"} className="bg-inherit w-6/12 pl-3"/>
    </form>
  )
}

export default Page404
