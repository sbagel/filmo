import { FaSearch } from 'react-icons/fa';

function DashHeader({user}) {
  return (
    <div className="flex text-milk sticky px-20">
      <SearchBar/>
      <End user={user}/>
    </div>
  )
}

function SearchBar(){
  return (
    <form className="flex w-9/12">
      <div  className="text-sm text-placeholder pt-[.85rem]" ><FaSearch/></div>
      <input placeholder={"Find photos, people, or groups"} className="bg-inherit w-6/12 pl-[1rem]"/>
    </form>
  )
}

function End({user}){
  return(
    <div className="flex justify-end flex-grow items-center">
      {/* get pro */}
      <div className="mr-3 font-semibold text-sm"><a href="/pro">Get Pro</a></div>
      {/* upload button */}
      <a href="/upload"><button type="button" className="bg-cornflower rounded-full w-[5.5rem] h-[2.5rem] text-sm font-bold">Upload</button></a>
      {/* divider */}
      <VertDivider/>
      {/* avatar  */}
      <div className="avatar">
        <a href='/username'><div className="w-10 h-10 rounded"><img className="object-cover rounded" src={user.avatar}/></div></a>
      </div>
    </div>
  )
}

function VertDivider(){
  return (
    <div className="border-l-[1.5px] border-placeholder/[.4] px-2 ml-5 mr-2 h-[25px]"><div className="invisible">h</div></div>
  )
}

export default DashHeader