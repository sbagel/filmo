import { useAuthState } from '~/components/contexts/UserContext';
import { useEffect, useState } from 'react';
import Button from '~/components/shared/Button'

function Form2({ setCount, setNewUser }){
  const [submit, setSubmit] = useState(false)
  const [username, setUsername] = useState(null)
  const [first, setFirst] = useState(null)
  const [last, setLast] = useState(null)


  console.log('info',)

  useEffect(() => {
    if (submit && username && first && last) {
      setNewUser(prevState => ({
        ...prevState,
        'username': username,
        'name': `${first} ${last}`
        }));

      setCount(prev=>prev+1)
    }
  }, [submit])

  return (
    <div className="w-[30rem] font-semibold">
      <form>
      <Form title="Username" placeholder="Enter Username" setState={setUsername}/>
      <Form title="First name" placeholder="This will show up on your profile! You can change it later." setState={setFirst}/>
      <Form title="Last name" placeholder="This will show up on your profile! You can change it later." setState={setLast}/>
      <div onClick={e=>setSubmit(!submit)}>
      <Button type="submit" mx="auto" height="10" width="[30rem]" color="black" text="Continue" textSize="sm"/>
      </div>
      </form>
    </div>
  )
}


function Form({title, placeholder, setState}){
  return (
    <div className="mb-5">
      {title}
      <input
        placeholder={placeholder}
        className="w-full bg-transparent border-b-[1.5px] border-eerie/[.5] placeholder:text-eerie/[.5]"
        onChange={e=> setState(e.target.value)}/>
    </div>
  )
}


export default Form2;
