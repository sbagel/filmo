import { useAuthState } from '~/components/contexts/AuthContext';
import { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import Button from '~/components/shared/Button';

function Form2({ setCount, setNewUser }){

  const avatarInput = useRef(null);
  const headerInput = useRef(null);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedHeader, setSelectedHeader] = useState(null);

  const [username, setUsername] = useState(null)
  const [first, setFirst] = useState(null)
  const [last, setLast] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [header, setHeader] = useState(null)

  const handleAvatarClick = event => {
    avatarInput.current.click();
  };

  useEffect(() => {
    const formData = new FormData();
    if(selectedAvatar) {
      formData.append('file', selectedAvatar)

      axios.post('/api/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => {setAvatar(res.data.results[0]); console.log(res.data)})
        .catch(e => console.log(e))
    }

  }, [selectedAvatar])

  const handleHeaderClick = event => {
    headerInput.current.click();
  };

  useEffect(() => {
    const formData = new FormData();
    if(selectedHeader) {
      formData.append('file', selectedHeader)

      axios.post('/api/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
        .then(res => setHeader(res.data.results[0]))
        .catch(e => console.log(e))
    }

  }, [selectedHeader])

  const handleUpload = async () => {
    if (username && first && last) {
      setNewUser(prevState => ({
        ...prevState,
        'username': username,
        'name': `${first} ${last}`,
        'avatar': avatar ? avatar : 'https://i.postimg.cc/Y2LJKp9B/default.jpg',
        'header': header ? header : 'https://i.postimg.cc/G242bp3G/flowers-402094-1920.jpg',
        'follows': 0,
        'followers': 0
        }));

      setCount(prev=>prev+1)
    }
  }

  return (
    <div className="w-[30rem] font-semibold">
      <div className='w-[110%] ml-[-5%] mb-[4rem] relative'>
        {/* header */}
        <img
          alt="header img"
          src={header ? header : 'https://i.postimg.cc/G242bp3G/flowers-402094-1920.jpg'}
          className="object-cover w-full h-[12rem] rounded-lg"/>
          {/* change header */}
          <div className="absolute top-0 right-0 mt-[-.5rem] mr-[-.5rem]">
          <input type="file" className="hidden" ref={headerInput} onChange={e=>setSelectedHeader(e.target.files[0])}/>
            <button className="bg-black text-milk rounded-full w-[2rem] h-[1.5rem] text-[10px]" onClick={handleHeaderClick}>Edit</button>
          </div>

        {/* avatar */}
        <div className="absolute bottom-0 mb-[-3rem] left-[1rem] avatar">
          <div className="w-[6rem] h-[6rem] rounded mb-[1rem]">
            <img
              alt="user image"
              src={avatar ? avatar : 'https://i.postimg.cc/Y2LJKp9B/default.jpg'}
              />
          </div>
            {/* change avatar */}
            <div className="absolute right-0 mt-[-.5rem] mr-[-.5rem]">
            <input type="file" className="hidden" ref={avatarInput} onChange={e=>setSelectedAvatar(e.target.files[0])}/>
              <button className="bg-black text-milk rounded-full w-[2rem] h-[1.5rem] text-[10px]" onClick={handleAvatarClick}>Edit</button>
            </div>
        </div>
      </div>
      {/* forms */}
      <form>
      <Form title="Username" placeholder="Enter Username" setState={setUsername}/>
      <Form title="First name" placeholder="This will show up on your profile! You can change it later." setState={setFirst}/>
      <Form title="Last name" placeholder="This will show up on your profile! You can change it later." setState={setLast}/>
      <div onClick={e=>handleUpload()}>
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
