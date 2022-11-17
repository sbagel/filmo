import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "~/lib/firebase";
import { FcGoogle } from "react-icons/fc"
import Button from "~/components/shared/Button"
import axios from 'axios'


export const SignUpButton = ({ setNewUser }) => {

  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    auth.languageCode = "en";

    signInWithPopup(auth, provider)
    .then(result => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;

      setNewUser(prevState => ({
        ...prevState,
        'token': token,
        'email': user.email,
        'meta': user.metadata
        }));

    })
  };

  return (
    <div onClick={handleClick}>
    <Button mx="auto" height="10" width="[30rem]" color="transparent" icon={<span className="text-lg mr-2"><FcGoogle/></span>} text="Sign Up With Google" textSize="sm" extra2="flex text-black" extra="border-2 border-black/[.4] rounded-full"/>
    </div>
  );
};
