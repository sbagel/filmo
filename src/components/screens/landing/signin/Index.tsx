import { useRef, useState } from 'react';
import { Head } from '~/components/shared/Head';
import SignIn from './components/SignIn';
import Logo from '~/components/shared/Logo';

function Index() {

  return (
    <>
      <Head title="Sign in" />
      <div className="flex flex-col min-h-screen
        bg-cover
        bg-[url('https://i.postimg.cc/q0nzs7Hv/butterfly-5344157.jpg')]">
        <Nav/>
        <SignIn/>
      </div>
    </>
  );
}

function Nav(){
  return (
    <div className="bg-black/[.5] h-[5.5rem] font-bold px-5 text-milk">
      <Logo size="text-[1.8rem] mt-[1rem]" extra="text-[1.5rem] mt-[.78rem]"/>
    </div>
  )
}

export default Index;