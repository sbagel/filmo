import { Head } from '~/components/shared/Head';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SignUpNav from './components/SignUpNav';
import Form1 from './components/forms/Form1';
import Form2 from './components/forms/Form2';


function Index() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    if (count === 2) {
      console.log('newUser',newUser)
      axios.post('/api/users/new', newUser)
        .then(res => console.log('posted'))
        .then(() => navigate('/'))
        .catch(e => console.log('error'))
    }
  }, [count])

  return (<>
    <Head title="Sign up" />

    <div className="flex flex-col min-h-screen overflow-hidden
        bg-cover
        bg-[url('https://i.postimg.cc/q0nzs7Hv/butterfly-5344157.jpg')]">
      <SignUpNav/>

      <div className="bg-milk/[.7] w-[40%] flex flex-col flex-grow py-12 [&>*]:m-auto">
        {count===0 && <Form1 setCount={setCount} setNewUser={setNewUser}/> }
        {count===1 && <Form2 setCount={setCount} setNewUser={setNewUser}/> }
      </div>
    </div>
    </>
  );
}

export default Index;