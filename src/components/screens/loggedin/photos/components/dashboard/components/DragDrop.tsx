import { useState } from "react";
import { FileUploader } from "react-drag-drop-files-adjusted";
import { SlCloudUpload } from "react-icons/sl";

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function DragDrop() {
  const [file, setFile] = useState([]);

  const handleChange = (newFile) => {
    setFile([...file, newFile]);
  };

  console.log(file)

  return (
    <FileUploader
      handleChange={handleChange}
      multiple={true}
      name="file"
      types={fileTypes}
      children={
        <div className="flex flex-grow h-[40rem] w-[60rem] cursor-pointer justify-center items-center text-milk">
          <div className="flex flex-col items-center justify-center text-center">

            <SlCloudUpload size={200}/>
            <p className="text-[3rem] font-bold">Drag and drop photos</p>
            <p className="text-placeholder">Or click to import JPG and PNG images</p>
          </div>
        </div>
    }/>
  );
}

export default DragDrop;