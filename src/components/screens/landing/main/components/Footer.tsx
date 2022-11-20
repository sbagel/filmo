
import { GrFacebook, GrTwitter, GrInstagram } from "react-icons/gr";

function Page404() {
  return (
    <div className="flex flex-grow justify-center items-center bg-black text-placeholder [&>*]:mr-[4rem]">
      <div>About</div>
      <div>Guidelines</div>
      <div>Help</div>
      <div>Help forum</div>
      <div>Privacy</div>
      <div>Terms</div>
      <div className="flex justify-around [&>*]:mr-[1.5rem]">
        <p><GrFacebook/></p>
        <p><GrTwitter/></p>
        <p> <GrInstagram/></p>
      </div>

    </div>
  )
}

export default Page404
