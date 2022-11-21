import { ProfileContext } from '~/components/contexts/ProfileContext';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { BsPinAngle, BsPinAngleFill } from "react-icons/bs";

function PinnedPhotos() {
  const { user, setUser } = useContext(ProfileContext)
  const [ images, setImages ] = useState([])
  const [ update, setUpdate ] = useState(false)

  useEffect(()=>{
    if (user) {
      axios.get(`/api/users/current/pinnedphotos?username=${user.username}`)
        .then(res => {if (res.data.length!==images.length){
          res.data.forEach(photo => {
            setImages(prev=>[...prev, {
              src: photo.url,
              pinned: photo.pinned
            }])
          })
        }})
    }
  }, [update])

  const handlePin = async (image) => {
    axios.put(`/api/photos/pin?url=${image.src}`)
      .then(res => {console.log('success!', res); setImages([]); setUpdate(!update)})
      .catch(e => console.log('put error', e))
  }

  return (
    images.length?
      images.map((image, i) =>
        <div className='w-[20rem] relative' key={i}>
          <img src={image.src} alt="user photo"/>
          {image.pinned ?
          <div
          onClick={() => handlePin(image)}
          className='text-milk p-[.3rem] absolute top-0 right-0 mt-[.5rem] mr-[.5rem] text-[2rem] z-10 bg-cornflower rounded-full hover:[#646464]/[0.5]'>
          <BsPinAngleFill size={20}/>
          </div>
          :
          <div
            onClick={() => handlePin(image)}
            className='text-milk p-[.3rem] absolute top-0 right-0 mt-[.5rem] mr-[.5rem] text-[2rem] z-10 bg-[#646464] rounded-full hover:bg-cornflower/[0.5]'>
            <BsPinAngle size={20}/>
          </div>}
        </div>)
    :
    null

  )
}

export default PinnedPhotos
