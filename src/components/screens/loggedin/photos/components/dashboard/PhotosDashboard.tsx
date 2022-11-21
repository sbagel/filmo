import DragDrop from "./components/DragDrop"
import AllPhotos from "./components/AllPhotos"
import PinnedPhotos from "./components/PinnedPhotos"

function PhotosDashboard({category, setCategory}) {

  if (category === 'Upload'){
    return (
      <div className="flex-grow flex flex-wrap text-milk mt-[3.5rem]">
       <DragDrop setCategory={setCategory}/>
       </div>
     )
  }

  if (category === 'All Photos') {
    return (
      <div className="text-milk p-[1rem] flex flex-wrap [&>*]:mr-[1rem] [&>*]:mt-[1rem] mt-[4.5rem]">
       <AllPhotos/>
       </div>
    )
  }

  if(category === 'Pinned'){
    return (
      <div className="text-milk p-[1rem] flex flex-wrap [&>*]:mr-[1rem] [&>*]:mt-[1rem] mt-[4.5rem]">
      <PinnedPhotos/>
      </div>
    )
  }
}

export default PhotosDashboard
