import PinnedPhotos from './components/pinnedphotos/PinnedPhotos'
import AllPhotos from './components/allphotos/AllPhotos'

function UserFeed() {
  return (
    <div className="flex flex-col z-10 mt-[3rem] px-[2rem]">
      <PinnedPhotos/>
      <AllPhotos/>
    </div>
  )
}

export default UserFeed
