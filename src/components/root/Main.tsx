import { Router } from '~/components/router/Router';
import { setupFirebase } from '~/lib/firebase';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  useSignIn,
  useSignOut,
  useAuthState,
} from '~/components/contexts/AuthContext';
import { ProfileContext } from '~/components/contexts/ProfileContext';
import axios from 'axios';

function Main() {
  const { state } = useAuthState();
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setupFirebase();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        signIn(user);
      } else {
        signOut();
      }
    });
  }, []);

  useEffect(() => {
    if (state.state === 'SIGNED_IN') {
      axios
        .get(`/api/users/current?email=${state.currentUser.email}`)
        .then((res) => {
          setUser(res.data);
          return res.data;
        })
        .then((user) => {
          axios.get('https://api.sightengine.com/1.0/check.json', {
            params: {
              url: user.header,
              models: 'properties',
              api_user: import.meta.env.VITE_API_USER,
              api_secret: import.meta.env.VITE_API_SECRET,
            }
          })
          .then(res => setUser({ ...user, blur: res.data.colors.dominant.hex }))
          .catch(e => console.log(e))
        })
        .catch((e) => console.log('error', e));
    }
  }, [state.state]);

  return (
    <ProfileContext.Provider value={{ user, setUser }}>
      <Router />
    </ProfileContext.Provider>
  );
}

export default Main;
