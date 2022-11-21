import DragDrop from "./components/DragDrop"

function PhotosDashboard({category}) {

  if (category === 'Upload'){
    return (
      <div className="flex-grow flex justify-center items-center text-milk mt-[3.5rem]">
       <DragDrop/>
       </div>
     )
  }
}

function Nav(){

}

export default PhotosDashboard
