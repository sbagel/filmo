import { FaHome, FaPhotoVideo, FaRegHeart, FaRegPaperPlane, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "~/lib/firebase";

function SideIcons() {
  const navigate = useNavigate();

  const signOut = () => {
    const auth = useAuth();
    auth.signOut();
    navigate('/');
  };

  return (
    <>
      <IconTemplate icon={<FaHome/>} url="/" title="Home"/>
      <IconTemplate icon={<FaPhotoVideo/>} url="/photos" title="My photos"/>
      <IconTemplate icon={<FaRegHeart/>} url="/likes" title="My likes"/>
      <IconTemplate icon={<FaRegPaperPlane/>} url="/messages" title="Messages"/>

      {/* sign out icon */}
      <div className="flex items-center hover:text-cornflower w-fit my-[1.5rem] font-semibold cursor-pointer">
        <span className="mr-5 text-[1.3rem]"><FaSignOutAlt/></span>
      <span className="hover:border-b-[2px] hover:border-cornflower hover:text-milk" onClick={signOut}>Sign out</span>
    </div>
    </>
  )
}

function IconTemplate({ icon, url, title }){
  return (
    <div className="flex items-center hover:text-cornflower w-fit my-[1.5rem] font-semibold">
        <span className="mr-5 text-[1.3rem]">{icon}</span>
      <a href={url}><span className="hover:border-b-[2px] hover:border-cornflower hover:text-milk">{title}</span></a>
    </div>
  )
}

export default SideIcons
