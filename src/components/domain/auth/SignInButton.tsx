import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useAuth } from "~/lib/firebase";
import Button from "~/components/shared/Button"
import { FcGoogle } from "react-icons/fc"
import { useNavigate } from 'react-router-dom';

export const SignInButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = "en";

    signInWithPopup(auth, provider)
      .then(result => {navigate('/')})
  };

  return (
    <div onClick={handleClick}>
    <Button mx="auto" height="10" width="[30rem]" color="transparent" icon={<span className="text-lg mr-2"><FcGoogle/></span>} text="Sign In With Google" textSize="sm" extra2="flex text-black" extra="border-2 border-black/[.4] rounded-full"/>
    </div>
  );
};
