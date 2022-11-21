import { useState, useContext } from 'react';
import axios from 'axios';


function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const data = new FormData();

  console.log('file',selectedFile)


  const handleUpload = async (file) => {
    data.append('file', selectedFile)
    data.append('text', 'hi')

    axios.post('/api/upload', data, { headers: {'Content-Type': 'multipart/form-data'}})
      .then(res => console.log(res.data.results[0]))
      .catch(e => console.log(e))
    }

  return (
      <div>
          hi

          <input type="file" onChange={e=>{setSelectedFile(e.target.files[0])}}/>
          <button onClick={(e) => handleUpload(selectedFile)}> Upload to S3</button>
      </div>
  );
}

export default App;