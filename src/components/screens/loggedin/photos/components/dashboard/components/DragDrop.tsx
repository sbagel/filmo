import { useState, useContext } from "react";
import { FileUploader } from "react-drag-drop-files-adjusted";
import { SlCloudUpload } from "react-icons/sl";
import { ProfileContext } from '~/components/contexts/ProfileContext';
import axios from 'axios';

const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const [links, setLinks] = useState(null)
  const {user, setUser} = useContext(ProfileContext)
  const formData = new FormData();

  const handleChange = (newFile) => {
    setFile(newFile);

    setFile(
      Object.values(newFile).map((curFile)=>Object.assign(curFile,{ preview: URL.createObjectURL(curFile), })),
    );
  };

  const handleUpload = async () => {
    Object.values(file).map((curFile) => { formData.append('file', curFile)})

    axios.post('/api/upload', formData, { headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => {
        res.data.results.forEach(curResult => {
          axios.post('/api/user/current/photos', {
            username: user.username,
            result: curResult
          })
            .then(res => console.log(res))
            .catch(e => console.log(e))
        })
      })
      .catch(e => console.log(e))
  }

  return (
    <div className="flex flex-col">
    <FileUploader
      handleChange={handleChange}
      multiple={true}
      name="file"
      types={fileTypes}
      children={
            file ?
            <>
                <div className="flex [&>*]:mr-[1rem] mt-[1rem]">
                {file ?
                  file.map((curFile, i) =>
                    <div key={i}>
                      <img
                        src={curFile.preview}
                        className="w-[20rem] h-[20rem] object-cover"
                        onLoad={
                            ()=>{
                                URL.revokeObjectURL(file.preview)
                            }
                        }/>
                    </div>
                  )
                  :
                  null
                }
                </div>
              </>
          :
          <div className="flex flex-grow h-[40rem] w-[60rem] cursor-pointer justify-center items-center text-milk">
            <div className="flex flex-col items-center justify-center text-center">
              <SlCloudUpload size={200}/>
              <p className="text-[3rem] font-bold">Drag and drop photos</p>
              <p className="text-placeholder">Or click to import JPG and PNG images</p>
            </div>
          </div>
    }/>
    {file ?
      <div className="flex justify-center mt-[2rem]" onClick={handleUpload}>
        <button className="bg-cornflower w-[5rem] h-[2.5rem] rounded">Upload</button>
      </div>
    :
    null}

    </div>
  );
}

export default DragDrop;