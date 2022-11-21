import { ProfileContext } from '~/components/contexts/ProfileContext';
import Gallery from "@jussmor/react-photo-gallery";
import axios from 'axios';
import { useState, useContext, useEffect } from "react";
import reactImageSize from 'react-image-size';

function AllGallery() {
  const {user, setUser} = useContext(ProfileContext)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    if (user) {
      axios.get(`/api/users/current/photos?username=${user.username}`)
        .then(res => {if(res.data.length!==photos.length){res.data.forEach(photo => {
          reactImageSize(photo.url)
            .then(({ width, height }) => {
              if (width>height) {
                setPhotos(prev=>[...prev, {
                  src: photo.url,
                  width: 5,
                  height: 3,
                }])
              } else {
                setPhotos(prev=>[...prev, {
                  src: photo.url,
                  width: 3,
                  height: 4,
                }])
              }
            })
            .catch((e) => console.log(e));
        })}})
        .catch(e => console.log(e))
    }
  }, [user])

  return (
    photos ? <Gallery photos={photos} direction="row"/> : null
  )
}

export default AllGallery


