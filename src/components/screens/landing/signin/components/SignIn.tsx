import Button from '~/components/shared/Button'
import { getStatus } from "~/lib/firebase";
import { SignInButton } from '~/components/domain/auth/SignInButton';

function SignIn(){

  return (
    <div className="bg-milk/[.7] w-[40%] flex flex-col flex-grow py-12 [&>*]:m-auto">
      <div className="w-[30rem] font-semibold">
        <SignInButton/>
        <div className="divider">OR</div>
        <Form title="Email" placeholder="Enter Email"/>
        <Form title="Password" placeholder="Enter Password"/>
        <Button mx="auto" url="/next" height="10" width="[30rem]" color="black" text="Sign in" textSize="sm"/>
      </div>
    </div>
  )
}

function Form({title, placeholder}){
  return (
    <div className="mb-5">
      {title}
    <form>
      <input placeholder={placeholder} className="w-full bg-transparent border-b-[1.5px] border-eerie/[.5] placeholder:text-eerie/[.5]"/>
    </form>
    </div>
  )
}

export default SignIn;
