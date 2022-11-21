import { ProfileContext } from '~/components/contexts/ProfileContext';
import Gallery from "@jussmor/react-photo-gallery";
import axios from 'axios';
import { useState, useContext, useEffect } from "react";
import reactImageSize from 'react-image-size';

function AllGallery() {
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

  return (
    <div className='flex [&>*]:mr-[.5rem]'>
      {images.length?
      images.map((image, i) =>
        <div className='w-[15rem] relative' key={i}>
          <img src={image.src} alt="user photo"/>
        </div>)
    :
    null}
    </div>
  )
}

export default AllGallery


