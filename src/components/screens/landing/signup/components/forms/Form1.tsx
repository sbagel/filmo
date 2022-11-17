import { useAuthState } from '~/components/contexts/UserContext';
import { SignUpButton } from '~/components/domain/auth/SignUpButton';
import { useEffect, useState } from 'react';
import Button from '~/components/shared/Button'

function Form1({ setCount, setNewUser }){
  const { state } = useAuthState();

  useEffect(() => {
    if (state.state === 'SIGNED_IN') {
      setCount(prev=>prev+1)
    }
  }, [state])

  return (
    <div className="w-[30rem] font-semibold">
      <SignUpButton setNewUser={setNewUser}/>
      <div className="divider">OR</div>
      <Form title="Email" placeholder="Enter Email"/>
      <Form title="Password" placeholder="Enter Password"/>
      <Button mx="auto" url="/next" height="10" width="[30rem]" color="black" text="Sign up" textSize="sm"/>
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


export default Form1;
