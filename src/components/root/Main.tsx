import { Router } from "~/components/router/Router";
import { setupFirebase } from "~/lib/firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useSignIn, useSignOut, useAuthState } from "~/components/contexts/AuthContext";
import { ProfileContext } from '~/components/contexts/ProfileContext';
import axios from 'axios';

function Main() {
  const { state } = useAuthState();
  const { signIn } = useSignIn();
  const { signOut } = useSignOut();
  const [user, setUser] = useState(null)

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
    if(state.state === "SIGNED_IN"){
      axios.get(`/api/users/current?email=${state.currentUser.email}`)
      .then(res => {setUser(res.data)})
      .catch(e => console.log('error'))
    }
  }, [state.state])


  return (
    <ProfileContext.Provider value={{user, setUser}}>
      <Router />
    </ProfileContext.Provider>
  );
}

export default Main;
